import s from "./../CatalogPage.module.css";
import { TovarCard } from "./TovarCard";
import { useEffect, useState } from "react";
import {discount, langCondition, priceCondition, tovarListURL} from "../../../constants";

export function Tovars({ activeFilter, inputValue }) {
    const [finalTovarList, setFinalTovarList] = useState([]);
    const [filteredTovarList, setFilteredTovarList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(tovarListURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const FTL = data.map((el) => {
                    // Цена с учетом скидки
                    let newPrice = el.price - (el.price / 100) * discount;

                    // Перебор по условию
                    if (el.price >= priceCondition || el.lang === langCondition) {
                        el.discountPrice = Math.ceil(newPrice);
                    }
                    return el;
                }) // Скидка на товары;
                setFinalTovarList(FTL); // Присвоение массива в состояние
                setIsLoaded(true); // Установка флага загрузки
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    // Фильтрация товаров
    useEffect(() => {
        if (isLoaded && finalTovarList.length > 0) {
            const filteredList = finalTovarList.filter((el) => {
                let isMatch = true;

                if (inputValue) {
                    isMatch =
                        (el.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                            el.artist.join(", ").toLowerCase().includes(inputValue.toLowerCase())) &&
                        isMatch;
                }

                if (activeFilter === "Ru" || activeFilter === "En") {
                    isMatch = el.lang === activeFilter && isMatch;
                }

                if (activeFilter[0] === "<") {
                    if (el.discountPrice) {
                        isMatch = el.discountPrice <= 30 && isMatch;
                    } else {
                        isMatch = el.price <= 30 && isMatch;
                    }
                } else if (activeFilter[0] === ">") {
                    if (el.discountPrice) {
                        isMatch = el.discountPrice > 30 && isMatch;
                    } else {
                        isMatch = el.price > 30 && isMatch;
                    }
                }

                return isMatch;
            });
            setFilteredTovarList(filteredList);
        }
    }, [isLoaded, finalTovarList, activeFilter, inputValue]);

    if (!isLoaded) {
        return <div className={s.tovars_container}><span className={s.isNotItems}>Загрузка...</span></div>;
    }

    return (
        <div className={s.tovars_container}>
            {filteredTovarList.length ? (
                <div className={s.tovars}>
                    {filteredTovarList.map((item) => (
                        <TovarCard
                            key={item._id}
                            id={item._id}
                            lang={item.lang}
                            artist={item.artist}
                            title={item.title}
                            price={item.price}
                            withoutPage={item.withoutPage}
                            cover={item.img[0]}
                            discountPrice={item.discountPrice}
                        />
                    ))}
                </div>
            ) : (
                <span className={s.isNotItems}>
          Нет товаров, подходящих по условиям
        </span>
            )}
        </div>
    );
}