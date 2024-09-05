const express = require('express');
const app = express();
const port =  3001; // Порт для бэкенда

// Middleware для CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

const db = {
    tovarList: [
        {
            id: 1,
            title: "test drive: archive",
            artist: ["LILDRUGHILL"],
            price: 25,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fcf79a509e5d49e423cb000258fd69ccf.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fc302bd3dea71b1546dad369609c77315.1000x1000x1.png",
                amphibian:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fa7bbb304e4739cbb0917a4d925f60a1e.1000x1000x1.png",
            },
            lang: "Ru",
            date: "13 Октября 2023",
            trackList: {
                "test drive": [],
                update: [],
                amphbian: [],
                numb: [],
                "fake love": [],
                chosen: [],
                "burn out": [],
            },
            description: [
                "Драгхилл вновь напомнил о себе после громкого возвращения. Оборвав молчание в два года, он дропнул успешный rEVOLVE, который стал новым витком в творчестве артиста.",
                "Помимо высокого уровня речитативной техники Мишаня предлагает слушателю и качественные эмбиент биты с фирменной аутентикой, именно это направление получило развитие на test drive: archive.",
                "Новую работу Миши можно рассматривать как последнюю часть его тетралогии.В нем Драгхилл делает последние штрихи над своим стилем звучания.Сама подача уже стандартная для Михаила и тянется еще с All Babies Fly, но он каждый раз меняет вид этой подачи. Драгхилл подстраивается под каждый инструментал и где надо он будет протягивать гласные, там где надо он даст больше экспрессии, где надо он сделает пробежку по биту, то есть он делает свои треки живыми для восприятия.",
                "Он каждый раз находит разные грани и демонстрирует их слушателю, то это именно то что называется “фирменный звук”",
            ],
            yandex: "https://music.yandex.ru/album/27652126",
        },
        {
            id: 2,
            title: "PHYSICAL PAIN",
            artist: ["LOVV66"],
            price: 20,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F61db3378a0c179f5a3ef0c8ac90ae0ea.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F36379a8a066468f2659846052d2473b4.1000x1000x1.jpg",
                "Alternative cover":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F3e02a3047323f13766b5a32ced90c26e.1000x1000x1.jpg",
            },
            lang: "Ru",
            date: "28 Мая 2021",
            trackList: {
                "Физическая боль": [],
                Еще: [],
                "Мое время": [],
                "Зомби бейби": [],
                "Не Дай Запомнить": [],
                "Хей Хо": [],
                Другого: [],
                "Трап Трап": [],
                "Секса remix": ["THRILL PILL"],
                Планету: [],
                ДР: [],
                "Комплект белья": [],
            },
            description: [
                "Артист, тесно связанный с объединением MELON MUSIC, выпустил свой второй проект. LOVV66 укрепляет успех альбома «PUZZLES», с помощью релиза «ФИЗИКАЛ ПЭЙН».",
                "Рэпер развивает стилистику хитового сингла «50к в сумке у папы», вдохновлённого музыкой одного из главных трэп-трендсеттеров Playboi Carti.",
            ],
            yandex: "https://music.yandex.ru/album/15813534",
        },
        {
            id: 3,
            title: "DAMN.",
            artist: ["Kendrick Lamar"],
            price: 50,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Ff3f77222e1b615e0a10354ea6282ff22.1000x1000x1.png",
                "Alternative cover":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F6a0a761fbad580015c24479ef59077ae.960x960x1.jpg",
                "All credits for BLOOD.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F5b2bc9d3fba889d6e7fce07183ef3d30.666x666x1.png",
                "All credits for DNA.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ffd9cfe048a8594edc1b8e9ea29b27962.661x661x1.png",
                "All credits for YAH.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F1b723ca251e7cf63b6c1ef50dc7507ea.691x691x1.png",
                "All credits for ELEMENT.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F48c08c9d026c65791361a877c0b6a7c3.709x709x1.png",
                "All credits for FEEL.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F03a1b6bbdc024ba4ff21cc65ab341f5a.663x663x1.png",
                "All credits for LOYALTY.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fcb83c7205da565cd2b39e5807074f1b7.639x639x1.png",
                "All credits for PRIDE.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fd65692b4fb1da808a5689a9a86a6abec.490x490x1.png",
                "All credits for HUMBLE.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F49b483c4e2fb94956654c6add150a211.556x556x1.png",
                "All credits for LUST.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ff9c7fbd3deb26d0f08f35d7497f2656d.695x695x1.png",
                "All credits for LOVE.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F1fbc8113749a6c5bc83ce19601fe558e.677x677x1.png",
                "All credits for XXX.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fbdfec46af81600ad70fbbbb27afcadc3.722x722x1.png",
                "All credits for FEAR.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fa8155d7d5c58092c6af120e4d9b47d74.626x626x1.png",
                "All credits for GOD.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F03664a5c5e3925be7f81563a20476623.703x703x1.png",
                "All credits for DUCKWORTH.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ff46dfee346b9deec622a0b4b5cdf4473.648x648x1.png",
                "HUMBLE.":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F7b1ac652c1c28d80501ac4e1776bd4f2.1000x1000x1.jpg",
            },
            lang: "En",
            date: "14 Апреля 2017",
            trackList: {
                "BLOOD.": [],
                "DNA.": [],
                "YAH.": [],
                "ELEMENT.": [],
                "FEEL.": [],
                "LOYALTY.": ["Rihanna"],
                "PRIDE.": [],
                "HUMBLE.": [],
                "LUST.": [],
                "LOVE.": ["Zacari"],
                "XXX.": ["U2"],
                "FEAR.": [],
                "GOD.": [],
                "DUCKWORTH.": [],
            },
            description: [
                "This is Kendrick’s first full-length project since 2015’s To Pimp A Butterfly. In between the albums, Kendrick released the 8-track EP untitled unmastered.",
                "On February 27, 2016, Mike WiLL Made-It teased that he was in the studio with Kendrick on Instagram. A collaboration was reinforced when a HipHopDX staff member stated that a song titled “DNA” produced by Mike WiLL Made-It would appear on the album.",
            ],
            yandex: "https://music.yandex.ru/album/4294416",
        },
        {
            id: 4,
            title: "WILD EA$T",
            artist: ["SALUKI"],
            price: 50,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fb487fcefdace88d0cf74cfc770cd36ae.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F8444a084e3a36998e1af2f38ed360746.1000x1000x1.jpg",
                "WILD EA$T TRACK ITEMS":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F466b13dee29696464ef04e8942ebe0c5.1000x1000x1.jpg",
                "Alternative cover":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ffc6015de4908f5f53f86aa1166a6c466.1000x1000x1.jpg",
                art1: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fa557fac6532e581db16d798553f16a12.1000x1000x1.jpg",
                art2: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F8460fe576b2b06ed3e63eefdb3b59a0e.1000x1000x1.jpg",
                art3: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fc8c1728e367ff9c6d9c3afd2d94e7078.1000x1000x1.jpg",
                art4: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fbd3bd90ed9078ddc446b9cb2cb953ae4.1000x1000x1.jpg",
                art5: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Ffcc14e327b801fefc33025ebcddf87d7.1000x1000x1.jpg",
                art6: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F936e880443ec721a6961605e1a304223.1000x1000x1.jpg",
                art7: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F5fbc976d3156c338e7e71646ca1eb1a0.1000x1000x1.jpg",
                Огней:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Febdd633c301203b9f43e2208cd7a8b0a.1000x1000x1.png",
                HAHAHA:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fd7a7fd750888d92e00a2f3766a963e66.1000x1000x1.png",
                "LAGG OUT":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fbfd31c3e7352da9863bef14f6d2605ec.1000x1000x1.png",
            },
            lang: "Ru",
            date: "21 Апреля 2023",
            trackList: {
                "BBBITCH!": ["VACIO", "BATO"],
                "WILD EA$T": [],
                "BROTHA BROTHA": ["Boulevard Depo"],
                ВЫЛЕЧИМ: [],
                Огней: [],
                HAHAHA: [],
                "THE GOOD THE BAD & THE UGLY": [],
                "WILD EA$T 2": [],
                "LUNI ANA'S SONG": [],
                GLUGICIR: ["SENSEE"],
                "ТАК ЛЕГКО ЗАМЁРЗНУТЬ": [],
                MAGDALENE: ["OG Buda", "SABU"],
                BOY$: ["FEDUK", "FRIENDLY THUG 52 NGG"],
                "ЗВУЧИТ КАК ПЛАН (KREEM'S INTRO)": [],
                "LAGG OUT": ["ATL"],
                "1000 RAD": ["ANIKV", "Markul"],
                "NO CHURCH IN THE WILD EA$T": [],
                BOLOTO: ["БИЛИК", "Брутто"],
                "ВСТРЕТИМСЯ У КАССЫ": [],
                SOLOIST: ["JEEMBO"],
                "PIXIES & FAIRIES": [],
                "НЕМНОГО КРУЧЕ": [],
                MOSKVICHKA: ["Найк Борзов"],
                ВЕДЬМА: [],
                HOME: ["Баста"],
            },
            description: [
                "Арсений начал писать альбом WILD EA$T во время создания мини-альбома На Человека, но первый большой сдвиг произошел, когда он со своей командой сняли дом за городом и тусовались там месяц. Далее они год работали в новой квартире музыканта в Москве, ездили работать в Осетию и Грузию.",
                "Весь 2020 год SALUKI подогревал публику к выходу нового релиза, но, помимо своей сольной работы, он также работал и над совместным альбомом со 104 — СТЫД ИЛИ СЛАВА",
                "Кроме того, с 2020 музыкант начал показывать отрывки композиций на разных площадках: В Инстаграме и телеграм-канале STUDIO 21.",
                "Вдобавок Арсений сообщил, что дата выхода альбома переносится на 2021 год.",
            ],
            yandex: "https://music.yandex.ru/album/25511786",
        },
        {
            id: 5,
            title: "Life of a DON",
            artist: ["Don Toliver"],
            price: 30,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F4001a0283899911145eb13d3857b8cb3.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ffed8ac40c496ccc29b5eae7ffdd775ad.1000x1000x1.png",
                "What You Need":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F5d838dda11cd5430706d4a218b8871d0.1000x1000x1.png",
                "Drugs N Hella Melodies":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F6a0ee38171d9fa2745c301afa23c5781.1000x1000x1.png",
            },
            lang: "En",
            date: "8 Октября 2021",
            trackList: {
                XSCAPE: [],
                "5X": [],
                "Way Bigger": [],
                "Flocky Flocky": ["Travis Scott"],
                "What You Need": [],
                "Double Standards": [],
                "Swangin' On Westheimer": [],
                "Drugs N Hella Melodies": ["Kali Uchis"],
                "2AM": [],
                "Get Throwed": [],
                "Company Pt 2": [],
                OUTERSPACE: ["Baby Keem"],
                Smoke: ["HVN", "SoFaygo"],
                You: ["Travis Scott"],
                Crossfaded: [],
                BOGUS: [],
            },
            description: [
                "Life of a DON is Don Toliver’s second studio album and third official project, following the success of his 2020 debut album, Heaven Or Hell.",
                "The album name was officially announced on Don Toliver’s Instagram on September 28, 2021",
                "With Life of a DON, the Houston rapper intends to explain his personal life and let his fans see listen to him for the first time not as Don Toliver, but as Caleb, as he stated via Instagram, 'My life your life.'",
                "Don Toliver released the first official single 'What You Need' on May 4, 2021, which charted at #82 for a week on the Billboard Hot 100. On June 18, 2021, he dropped the second single 'Drugs N Hella Melodies,' featuring Colombian-American singer Kali Uchis.",
            ],
            yandex: "https://music.yandex.ru/album/18615853",
        },
        {
            id: 6,
            title: "KRISTINA",
            artist: ["LIL KRYSTALLL"],
            price: 30,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F711e4a65113312a86fe551ffcbb34b1b.1000x1000x1.png",
                "Alternative cover":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F6dc43f49578b742c27ff1969bbaa088e.1000x1000x1.png",
                "Я БУДУ":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fbb49d62c7f7a54f063cfe2194472a1cb.1000x1000x1.png",
                "Три буквы":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F8a9c24ebeacfcc43768c5f1f909ba730.1000x1000x1.png",
                CSM: "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ff95c036893a900196d38de0b8cbdde84.1000x1000x1.png",
            },
            lang: "Ru",
            date: "8 Декабря 2023",
            trackList: {
                Novikov: [],
                Кристина: ["Alisha"],
                Холод: ["The Limba"],
                "Скажи мне": ["FEDUK"],
                Birkin: ["OG Buda"],
                "Первый класс": [],
                Октябрь: ["9mice"],
                Кобра: [],
                Коллекция: [],
                "Джек Рипер": ["OBLADAET"],
                CSM: [],
                "Мой черёд": ["Yanix"],
                Друзья: ["ANIKV"],
                "City Boy": [],
                "NY Girl": [],
                "K-love": [],
                "Три буквы": ["Платина"],
                "Я БУДУ": ["Лоя", "5sta Family"],
            },
            description: [
                "Ещё в 2021 году в своей сторис в Инстаграм Уланс сделал заявление, что хочет один миллион фунтов за свой новый микстейп, отметив лейблы Warner Music Russia, Sony Music Russia и Black Star.",
                "После долгого затишья и пары выпущенных синглов, никакой информации об альбоме не появлялось на протяжении года. Зимой 2022-го Кристал выложил три поста в своём Телеграм-канале, после чего почти сразу их удалил.",
            ],
            yandex: "https://music.yandex.ru/album/28464612",
        },
        {
            id: 7,
            title: "Sosa Muzik",
            artist: ["Платина"],
            price: 30,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F6fa2a1df192bb6b8deee5c45bef2188e.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F11a18e6c5ac8575d5deb5416891819d9.1000x1000x1.jpg",
                "На грязном (Диана)":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fd66853a79518a5b906cde5d03d78339d.1000x1000x1.png",
                "Сердце для шалав":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ff96681636da8e8d27617b4dd2178a8ac.1000x1000x1.png",
            },
            lang: "Ru",
            date: "13 Августа 2021",
            trackList: {
                "В Клубе": [],
                "За Меня": [],
                "liga la sosa": [],
                "На Грязном (Диана)": [],
                Булки: ["LIL VAN"],
                Бригада: [],
                "Сан Ларан": [],
                "Самый классный парень": ["PLOHOYPAREN"],
                "Вопросов нету": [],
                "Сердце для шалав": [],
                Веном: ["Big Baby Tape"],
                Генг: [],
                "Abu Dhabi Ba6y": ["OG Buda", "Mayot"],
                "Как до луны": [],
                "Все эти деньги сразу": [],
            },
            description: [
                "Sosa Muzik — это долгожданный третий полноформатный студийный альбом от Платины. Работа рассказывает нам о том, что мы должны жить настоящим, наслаждаться моментом пока это возможно.",
                "Впервые о названии работы стало известно, когда Платина выложил в сторис с хештегом. Слово «Sosa» скорее всего, было позаимствовано у рэпера Chief Keef'а, который называл себя также, и который очень сильно повлиял на творчество Платины.",
                "После затишья, пары прямых эфиров с фанатами, и отрывками треков, 30 сентября 2020 года выходит первый до альбомный сингл 'На Грязном (Диана)'.",
                "В мае 2021, Платина вышел в сторис и анонсировал примерную дату: июнь, в июне он не вышел в связи с проблемами мастеринга, и т.п. нуждающихся работ.",
                "11 августа выходит второй до альбомный сингл 'Сердце для шалав', и уже точная дата релиза альбома 13 августа 2021 года.",
                "В дату выхода альбома ВКонтакте, если вы прослушали данный альбом два раза до 20 августа, вам давали уникальный статус Sosa Muzik к вашему имени и фамилии в виде белого сердечка.",
            ],
            yandex: "https://music.yandex.ru/album/17444119",
        },
        {
            id: 8,
            title: "Certified Lover Boy",
            artist: ["Drake"],
            price: 35,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Ffa02d8bc4c7ee74b5a1408c2be032fea.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F6c0f406f03ba037586f78f573df6fb4c.737x737x1.png",
            },
            lang: "En",
            date: "3 Сентября 2021",
            trackList: {
                "Champagne Poetry": [],
                "Papi's Home": [],
                "Girls Want Girls": ["Lil Baby"],
                "In The Bible": ["Lil Durk", "Giveon"],
                "Love All": ["Jay-Z"],
                "Fair Trade": ["Travis Scott"],
                "Way 2 Sexy": ["Future", "Young Thug"],
                TSU: [],
                "N 2 Deep": ["Future"],
                "Pipe Down": [],
                "Yebba's Heartbreak": ["Yebba"],
                "No Friends In The Industry": [],
                "Knife Talk": ["21 Savage", "Project Pat"],
                "7am On Bridle Path": [],
                "Race My Mind": [],
                Fountains: ["Tems"],
                "Get Along Better": ["Ty Dolla $ign"],
                "You Only Live Twice": ["Lil Wayne", "Rick Ross"],
                IMY2: ["Kid Cudi"],
                "F*****g Fans": [],
                "The Remorse": [],
            },
            description: [
                "One of his most highly anticipated releases in his career, Certified Lover Boy is Drake’s sixth studio album and the follow-up to his fifth studio album, Scorpion, which was released on June 29, 2018.",
                "On May 1, 2020, Drake dropped his fifth solo mixtape, Dark Lane Demo Tapes. The day before, he announced that the album would be released during the summer of 2020.",
                "Alongside the release of the song 'Laugh Now Cry Later,' which features Lil Durk, Drake announced the title of the album via Instagram.",
                "On October 24, 2020, his 34th birthday, Drake announced that the album would be released in January 2021 via the album’s trailer, therefore voiding his claims that the album would be released in summer 2020. The trailer saw Drake recreating the covers of his past LPs, which includes February 2009’s So Far Gone, November 2011’s Take Care, September 2013’s Nothing Was the Same and May 2020’s Dark Lane Demo Tapes.",
                "On January 20, 2021, after fans waited nearly a whole month with no album in sight, Drake said the album “won’t be dropping in January” via Instagram as he noted he was focusing on recovering from a knee injury he suffered back in October 2020. However, he still confirmed that the album would still be released later down the year.",
                "On March 5, 2021, Drake dropped Scary Hours 2, a sequel EP to 2018’s Scary Hours. Just like he did the first time in 2018, while he was working on Scorpion, Drake released Scary Hours 2 to keep fans happy and busy with new music while he continued to put the finishing touches on Certified Lover Boy.",
                "On August 27, 2021, the album’s release date was subtlety announced on the ESPN program, SportsCenter. While the program was showcasing baseball highlights, a video clip of someone holding a sign that reads 'CLB September 3' abruptly appears.",
                "Three days later, on August 30, 2021, Drake confirmed on Instagram that the album would be released on that date. He also posted the album's official cover, which consists of twelve pregnant women emojis.",
            ],
            yandex: "https://music.yandex.ru/album/17859702",
        },
        {
            id: 9,
            title: "All Babies Fly",
            artist: ["LILDRUGHILL"],
            price: 30,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F887904ba378e1843164a6a9aa0096136.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ffe870eb3c086d167e56313b09875d4b4.1000x1000x1.jpg",
                Ливень:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F1c9a62e839a1671d3937638dbf67e55d.1000x1000x1.png",
                Связь:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fb14a50fa9927533b8b16693348c62ea3.1000x1000x1.png",
                "Что ты заставил нас делать?":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F54a387957f92b5aac54a35617064d26d.1000x1000x1.png",
            },
            lang: "Ru",
            date: "29 Января 2021",
            trackList: {
                Дисбаланс: [],
                "Что ты заставил нас делать?": [],
                Драма: [],
                Терминал: ["ROCKET"],
                Связь: [],
                "Новый мир": [],
                Вновь: [],
                Поменять: [],
                Ливень: [],
                "Дом ужасов": [],
                Выходной: [],
                Рингтон: [],
                "Напиши мне": [],
                Полночь: ["Fresco"],
                Вне: [],
                "Никого кроме": ["Showbiz School"],
            },
            description: [
                "29 октября 2020 года артист в 19:11 по московскому времени выложил короткое видео с названием 'abf studio session', в котором были представлены сниппеты треков.",
                "5 января Михаил предложил фанатам расшифровать аббревиатуру релиза 'ABF'. Тот кто сможет это сделать, сможет прослушать релиз первым",
                "20 января LILDRUGHILL представил первый тизер альбома",
            ],
            yandex: "https://music.yandex.ru/album/13619041",
        },
        {
            id: 10,
            title: "POLAR NIGHT",
            artist: ["kondachelo"],
            price: 20,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F1ae27bc4b3b2ca38cc50ddf749d2e366.999x999x1.jpg",
                DEMON:
                    "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fab515d3af0da5c3aa422861df4b75ad7.1000x1000x1.png",
            },
            lang: "Ru",
            date: "21 Июля 2023",
            trackList: {
                "GO GET IT": [],
                STREETS: [],
                LED: [],
                KOLIK1: [],
                DEMON: ["OBLADAET"],
                MOSHP1T: [],
                VODOP4D: [],
                "STAK4N (Bonus)": [],
            },
            description: [
                "'POLAR NIGHT' - дебютный мини-альбом kondachelo, выпущенный 20 июля 2023 года. Альбом включает в себя 8 треков, включая вышедший ранее сингл 'DEMON'. В работе над альбомом приняли участие продюсеры pank, Dreamprod, aunix и другие. Мастеринг и микширование были выполнены Coubraque.",
                "kondachelo - рэп-исполнитель и продюсер, который дебютировал с синглом 'BUMAG4' в марте 2023 года. Он является участником объединения 'Players Club' и сотрудничает с другими артистами, такими как OBLADAET, LIL KRYSTALLL, Платина.",
            ],
            yandex: "https://music.yandex.ru/album/26593195",
        },
        {
            id: 11,
            title: "Heroes & Villains",
            artist: ["Metro Boomin"],
            price: 50,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F38a14946958b6dd834a697c217d89488.1000x1000x1.jpg",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F63acb77220860a21400adca8b686861a.1000x1000x1.jpg",
                "HEROES & VILLAINS (Heroes Version)":
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fd2c3d1dbd8d01471b3436f1aeac61394.1000x1000x1.jpg",
                "HEROES & VILLAINS (Villains Version)":
                    "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F7360f3a5b01ea634e10608c6975d61d5.1000x1000x1.jpg",
            },
            lang: "En",
            date: "2 Декабря 2022",
            trackList: {
                "On Time": ["John Legend"],
                "Superhero (Heroes & Villains)": ["Future", "Chris Brown"],
                "Too Many Nights": ["Future", "Don Toliver"],
                "Raindops (Insane)": ["Travis Scott"],
                Umbrella: ["21 Savage", "Young Nudy"],
                Trance: ["Travis Scott", "Young Thug"],
                "Around Me": ["Don Toliver"],
                "Metro Spider": ["Young Thug"],
                "I Can`t Save You (Interlude)": ["Future", "Don Toliver"],
                "Creepin'": ["The Weeknd", "21 Savage"],
                "Niagara Falls (Foot or 2)": ["Travis Scott", "21 Savage"],
                "Walk Em Down (Dont't Kill Civilias)": ["21 Savage", "Mustafa"],
                "Lock On Me": ["Travis Scott", "Future"],
                "Feel The Fiaaaah": ["A$AP Rpcky", "Takeoff"],
                "All The Money": ["Gunna"],
            },
            description: [
                "HEROES & VILLAINS is Metro Boomin's sophomore studio album, following his November 2018 project NOT ALL HEROES WEAR CAPES.",
                "The project's status was left in the dark until September 16, 2022 when Metro released an album announcement through YouTube—ultimately revealing a November 4 release date.",
                "Despite this, on October 26, 2022, Metro Boomin published a tweet mentioning how the release date would have to get pushed back to December 2, 2022, due to sample clearance issues.",
                "Nearly a month later, on November 22, 2022, Metro Boomin shared the album cover through his social media, which references the cover of the British rock band Pink Floyd's 1975 studio album Wish You Were Here.",
                "The album is divided into two sides: 'Heroes' and 'Villains,' with Metro having fans guess which side guests would appear on in the days leading up to the album's release.",
            ],
        },
        {
            id: 12,
            title: "SUPERSTAR! (Deluxe)",
            artist: ["Dina Ayada"],
            price: 30,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F4b8dd2659fda75bff4e1483463247e3c.1000x1000x1.png",
                "SUPERSTAR!":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ff5d088e704f41ba7e3b60daa3efb7fc4.1000x1000x1.png",
                "Girls Cry 2!":
                    "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F355f33f4ba1d30432569fd13fa2e3a9e.1000x1000x1.png",
            },
            trackList: {
                "Imagine!": [],
                "Girls Cry 2!": [],
                "Way Up!": [],
                "Tap In!": [],
                "Rover!": [],
                "In Love!": [],
                "Perfect!": [],
                "Flowers!": [],
                "Prada me!": [],
                "Go!": [],
                "Superstar!": [],
            },
            lang: "En",
            date: "22 Декабря 2022",
            description: [
                "Dina Ayada выпустила расширенное издание своего мини-альбома 'SUPERSTAR!' под названием 'SUPERSTAR! (Deluxe)' . Релиз включает в себя 11 треков, в том числе 3 новые песни, которые дополняют оригинальный трек-лист из 8 композиций.",
                "Первый трек 'Imagine!' - это песня о воплощении мечты Dina, веселье и избавлении от негативной энергии или мыслей . Второй трек 'Superstar' - заглавная песня мини-альбома, которая вдохновляет слушателей быть уверенными в себе и следовать за своей мечтой.",
                "Обложка 'SUPERSTAR!' выполнена в ярких розовых тонах и изображает Dina Ayada в образе настоящей суперзвезды. Расширенное издание демонстрирует творческий рост артистки и предлагает поклонникам новые интерпретации полюбившихся песен, а также дополнительные треки для более полного погружения в мир 'SUPERSTAR!'.",
            ],
        },
        {
            id: 13,
            title: "PHILARMONIA",
            artist: ["PHARAOH"],
            price: 50,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fabf929ba95ac8de8f8fd67f6e6580611.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Fbd3ed17ab488c850c897d6c0bb49851f.1000x1000x1.png",
            },
            lang: "Ru",
            date: "25 Ноября 2023",
            trackList: {
                "Может Расскажешь, Что Ты Чувствуешь? (Главные Ворота)": [],
                "Соната Ей": [],
                Идиот: ["Ilya Konoplev"],
                "Драгоценный Металл": ["Dima Roux"],
                "Белые Нити (Незабываема)": [],
                "Колыбель На Судный День": [],
                "Океан Бассейн  Вид": [],
                "Я Смотрел Как Ты Танцуешь": [],
                "Я Потратил Ночь На Поиск": [],
                "Кто-Нибудь  Знает, О Чем Эта Песня?": [],
                "Вечеринка В Холмах": [],
                "Такими, Как Сейчас": [],
                "Незабываема (Hamovniki House Mafia Remix)": [],
            },
            description: [
                "17 октября 2022 года, PHARAOH в своём Instagram-аккаунте и группе ВКонтакте заявил, что закончил работу над своим новым альбомом на 99%",
            ],
            yandex: "https://music.yandex.ru/album/24137654",
        },
        {
            id: 14,
            title: "23",
            artist: ["Central Cee"],
            price: 35,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fe2e71c4727c43b794627d6f6e31b603a.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F46ac3719694116113145cde0aa04e8e5.449x449x1.jpg",
                "Altenative cover":
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fb252581de0478353bc70660fb1c7e502.1000x1000x1.jpg",
            },
            lang: "En",
            date: "25 Февраля 2022",
            trackList: {
                KHABIB: [],
                "Straight Back to It": [],
                Ungrateful: [],
                Bunda: [],
                "Retail Therapy": [],
                Eurovision: [
                    "Rondodasosa",
                    "Baby Gang",
                    "A2 Anti",
                    "Morad",
                    "Beny Jr",
                    "Ashe 22",
                    "Freeze corleone",
                ],
                "Cold Shoulder": [],
                Mrs: [],
                "Air Bnb": [],
                "No Pain": [],
                "Terminal 5": [],
                "Obsessed With You": [],
                "8 Ball": [],
                "Lil Bro": ["Lil Bro"],
                "End of the Beginning": [],
            },
            description: [
                "23 is the sophomore mixtape from West London artist Central Cee. The project follows his commercially successful and critically acclaimed March 2021 debut mixtape Wild West.",
                "Cench started to work on the mixtape in mid-August, after sharing images on social media of him spending days and nights in the studio, even sleeping there with an air mattress.",
                "He ended his 5-month hiatus with the release of single “Little Bit of This” in July 2021, later following it up with his highly anticipated TikTok viral single “Obsessed With You” in September 2021, which went on to peak at Number 4 on the UK Singles Charts. At the end of the latter music video, a teaser of the mixtape was dropped with the message: '23 COMING SOON… STILL LOADING.'",
                "Cench officially announced the tape on November 25th with a freestyle, and revealed is set to be 15 tracks long and drop on February 25th, 2022. He also promoted his new collaboration with West London fashion brand Trapstar and hinted the drop of the tape’s second single “Retail Therapy” which dropped on January 6th. The tape’s third single, the more introspective and sombre “Cold Shoulder” was later released January 27th.",
                "Following the latter single, Cench dropped a trailer showing the cover art and a snippet of the 15 cut track list as well as fan-made CD artwork.",
            ],
            yandex: "https://music.yandex.ru/album/21533258",
        },
        {
            id: 15,
            title: "AA LANGUAGE",
            artist: ["Aarne"],
            price: 40,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F977075534279f0726fac84beebeb9ccb.1000x1000x1.png",
                Тесно:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F03319ee3758a8889c561c63611f9e6a5.999x999x1.jpg",
                Purge:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fda8b36e954ba2eabe3957511b14fbf42.605x605x1.jpg",
                "Не в тусе":
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F2ddb96aab6a639c0759847ba8ce6cca4.604x604x1.jpg",
                "Kebab Boy":
                    "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fc69df9205bfcc425ee11e6e317ab7a02.1000x1000x1.png",
                Daleko:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F3d6326afd14274fc3d126316dcb45267.605x605x1.jpg",
                "Бизнес Вумен":
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2Ff8ccdf912892196caa69a39b1921bc6c.605x605x1.png",
            },
            lang: "Ru",
            date: "12 Августа 2022",
            trackList: {
                Перепонки: ["FEDUK"],
                Тесно: ["BUSHIDO ZHO", "ANIKV"],
                Daleko: ["MORGENSHTERN"],
                "Ski Ski": ["Big Baby Tape"],
                Больно: ["MAYOT", "Markul"],
                Discord: ["Элджей", "LIL KRYSTALLL"],
                Purge: ["Lil Keed", "Mykko Montana"],
                Player: ["Famous Dex", "uglystephan"],
                Фиеста: ["Yanix", "SEEMEE"],
                "On Air": ["OBLADAET"],
                "Бизнес вумен": ["SLAVA MARLOW"],
                "Kebab Boy": ["LIL KRYSTALLL"],
                Noir: ["The Limba", "Markul"],
                "Не в тусе": ["Платина"],
                Detka: ["blago white"],
                "NBA 300 (Outro)": ["Платина"],
            },
            description: [
                "AA LANGUAGE — самый крупный продюсерский релиз русскоговорящего пространства, автором которого стал продюсер из Лондона, Aarne. Релиз полон артистов высшего уровня, среди которых есть представители разных жанров.",
                "Альбом готовился более трёх лет. За это время треклист крайне сильно менялся, но часть работ осталась с того времени. В пример можно привести треки 'Purge', 'Не в тусе' и 'Ski Ski', причём последний был написан в 2018 году.",
                "Слухи о скором выходе альбома впервые появились в 2020 году, когда состоялся релиз трека 'Purge', но в итоге вплоть до августа 2022 года выходили лишь синглы.",
                "Реальная информация о дате выхода релиза появилась в день выхода трека 'Тесно'. Дата выхода (12 августа) была опубликована самим продюсером. Немногим позже появляется треклист, в котором можно было впервые увидеть состав гостей.",
                "После выхода альбом сумел набрать первый миллион прослушиваний во ВКонтакте за 12 часов, что говорит о лояльности аудитории к подобному эксперименту.",
            ],
            yandex: "https://music.yandex.ru/album/23211206",
        },
        {
            id: 16,
            title: "PLAYERS CLUB 2",
            artist: ["OBLADAET"],
            price: 30,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F89d85810150a9bf1acd23ffaa149a5e8.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fe427e20fd14106b51412f7252d12d7c7.1000x1000x1.jpg",
                MUTANT:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F88e5b8052619c4c203ff96b1c6018ac8.1000x1000x1.png",
                MB: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fe032c34a7d919e859e8d712d2925f750.1000x1000x1.png",
                "MONSTER TRAKK":
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F76ad99faa26693f767d3b5ea6ac7df9a.1000x1000x1.png",
                "Дом С Привидениями":
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F5d2d4164df82b4e66b67383502317f58.1000x1000x1.png",
                BRITNEY:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F5d4b90b7ca24575f5825afec85ca80d8.1000x1000x1.png",
            },
            lang: "Ru",
            date: "10 Ноября 2023",
            trackList: {
                HARLEQUIN: [],
                "BOO!": [],
                PROKLYATIE: [],
                "SKI ANORAK": [],
                BRITNEY: [],
                MMM: [],
                GP$: [],
                GLOBA: [],
                "MONSTER TRAKK": [],
                INVESTOR: ["kondachelo"],
                MUTANT: [],
                "BOLSHOI BRAT": [],
                "ДОМ С ПРИВИДЕНИЯМИ": ["FRIENDLY THUG 52 NGG"],
                PRAYERS: ["Unknown T"],
                MB: ["LIL KRYSTALLL"],
                BABOCHKI: [],
                "735 PROBLEMS": [],
            },
            description: [
                "PLAYERS CLUB 2 — долгожданное продолжение нашумевшей первой части альбома PLAYERS CLUB. Релиз писался на протяжении двух лет, за это время 5 треков из 17 были выпущены синглами. Интересно, что Назар заявлял об уходе от дрилл-стилистики в PC2, но все синглы, вышедшие до релиза выполнены именно в этом жанре.",
                "Первая информация о релизе появилась в истории Назара, где был показан отрывок песни 'SLEEPKNOT', а также аббревиатура альбома — PC2.",
                "25 мая 2022 года Обла выпускает первый сингл из предстоящего релиза — 'MUTANT', а в полночь в этот же день выходит клип, в конце которого Назар ещё раз заявляет о скором выходе альбома: 'PLAYERS CLUB 2 ON THE WAY'",
                "Последующие несколько месяцев никакой точной информации по релизу не следует, но за это время исполнитель выпускает совместный с LIL KRYSTALLL сингл 'MB', а также свой парт трека 'Дом С Привидениями' специально для Театра МТС. Оба сингла, по мнению аудитории и исходя из текстовой составляющей треков, должны войти в PC2.",
                "12 мая 2023 выходит полная версия совместного с FRIENDLY THUG 52 NGG сингла 'Дом С Привидениями'.",
                "11 августа на PLAYERS SHOW 3 Назар объявил месяц выхода альбома — ноябрь.",
                "28 октября в конце клипа на предальбомный сингл 'BRITNEY' Назар показал финальную дату выхода долгожданного альбома — 10 ноября 2023 года.",
            ],
            yandex: "https://music.yandex.ru/album/28150967",
        },
        {
            id: 17,
            title: "WE DON’T TRUST YOU",
            artist: ["Future", "Metro Boomin"],
            price: 35,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F20254687c3cb0bba29f79f53ecb922c7.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F611f464f56628a64c2c8e9254b00832c.1000x1000x1.jpg",
            },
            lang: "En",
            date: "22 Марта 2024",
            trackList: {
                "We Don`t Trust You": [],
                "Young Metro": ["The Weeknd"],
                "Ice Attack": [],
                "Type Shit": ["Travis Scott", "Playboi Carti"],
                Claustrophobic: [],
                "Like That": ["Kendrick Lamar"],
                "Slimed In": [],
                "Magic Don Juan (Princess Diana)": [],
                Cinderella: ["Travis Scott"],
                "Runnin Outta Time": [],
                "Fried (She a Vibe)": [],
                "Ain`t No Love": [],
                "Everyday Hustle": ["Rick Ross"],
                GTA: [],
                "Seen it All": [],
                WTFYM: [],
                "Where My Twin @": [],
            },
            description: [
                "Have Future and Metro Boomin collaborated before?",
                "Yes, this marks the seventh direct collaboration between the two artists where they are both credited as artists, but Metro Boomin has helped produce many songs in Future's discography.",
                "In addition to Future and Metro Boomin’s musical relationship, the duo have also been friends for a long time and both hail from Atlanta, Georgia.",
                "How did this album perform on the charts?",
                "WE DON’T TRUST YOU debuted at #1 on the Billboard 200 during the chart week of April 5, 2024, after selling approximately 251,000 album-equivalent units during its first week.",
            ],
        },
        {
            id: 18,
            title: "rEVOLVE",
            artist: ["LILDRUGHILL"],
            price: 35,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fe1b0755295c49086502582a73112668f.1000x1000x1.png",
                evolve:
                    "https://t2.genius.com/unsafe/900x0/https%3A%2F%2Fimages.genius.com%2F62396327e5124c14e3354c348f4cf98b.1000x1000x1.jpg",
                Domino:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F3d47272e175f13537ea203902c71d30e.1000x1000x1.jpg",
            },
            lang: "Ru",
            date: "10 Марта 2023",
            trackList: {
                Koma: [],
                "Follow me": [],
                "Cream (Uh Uh Uh)": [],
                "Pluto Flow": [],
                "Jane & Jessie": [],
                Boycott: [],
                Matrix: [],
                Pride: [],
                Domino: [],
                Exchange: [],
                Adrenaline: [],
                Cardio: [],
                Mad: [],
                Control: [],
            },
            description: [
                "Часть материала, попавшего на «rEVOLVE», была записана автором после отъезда из России. Драгхилл не переставал работать над своим материалом и нашёл способ реализовать своё творчество за пределами родной страны.",
                "Чем сопровождался релиз альбома?",
                "7 января Миша в своём Телеграм-канале показывает первый сниппет с предстоящего альбома. В отрывке можно заметить иконку с надписью «deluxe».",
                "11 января артист показывает второй сниппет.",
                "После выхода evolve Миша меняет в Инстаграме свой статус на «evolve / rEVOLVE», что говорит о скором выходе делюкс-издания.",
            ],
            yandex: "https://music.yandex.ru/album/25160163",
        },
        {
            id: 19,
            title: "PHREQUENCY",
            artist: ["PHARAOH"],
            price: 30,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F9593ede565399ec7c828fe3baea01ecc.1000x1000x1.png",
            },
            lang: "Ru",
            date: "18 Августа 2023",
            trackList: {
                "На Одну Улыбку Больше": [],
                Лазарь: [],
                "В Прошлых Жизнях": [],
                "Взглянем В Глаза Правде": [],
                "Чья Вина": ["Ilya Konoplev"],
                "Другие Души": ["Ilya Konoplev"],
                "Не Могу": ["Ilya Konoplev"],
                Снайпер: [],
                "В Огне": [],
                "Время Вспять": ["Loc-Dog"],
                "Пост Фактум": [],
            },
            description: [
                "26 мая в своем Instagram аккаунте PHARAOH выложил сторис : 'THIS SUMMER. PHREQUENCY. LEFTOVERS S VIBE PLAYLIST'",
                "7 июля PHARAOH заявил, что отгрузил свой новый альбом «PHREQUENCY» на площадки в Threads.",
                "15 августа, Глеб в своём Instagram-аккаунте и группе ВКонтакте анонсировал дату выхода альбома.",
                "По словам исполнителя : “PHREQUENCY – плейлист из никуда не собирающихся войти треков 2022 / 2023”",
                "18 августа состоялся релиз альбома, название которого написано в манере исполнителя, где английскую букву “F” он заменил на “Ph”, ссылаясь на свой псевдоним. frequency-частота.",
            ],
            yandex: "https://music.yandex.ru/album/27003293",
        },
        {
            id: 20,
            title: "BROKEN SEASON",
            artist: ["ANIKV"],
            price: 25,
            img: {
                cover:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F2f5e1df3cd3475d444b203e37c6008f7.1000x1000x1.png",
                Треклист:
                    "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F059f0997062f4f1b399b793ef1b577dd.1000x1000x1.jpg",
            },
            lang: "Ru",
            date: "3 Марта 2023",
            trackList: {
                КАПЛЯМИ: [],
                ТАЮ: ["MAYOT"],
                ОДИНОКО: [],
                БЕСКОНЕЧНО: [],
                ТЕРАПЕВТ: [],
                ДА: [],
                БОЛЬШЕ: ["LIL KRYSTALLL"],
                НИКОГДА: [],
            },
            description: [
                "ANIKV выпустила полноформатный альбом, доступный эксклюзивно в «VK Музыке». На фитах — MAYOT и LIL KRYSTALLL. На обложке певица без привычных кудряшек и в новом образе в стиле викторианского панка от Вивьен Вествуд.",
                "Все треки были записаны Аникой в путешествиях между Америкой, Бали и Тбилиси.",
                "Что исполнительница сказала о релизе?",
                "В интервью «The Flow» артистка поделилась подробностями о своём альбоме:",
                "— Твой новый альбом называется «Broken Season». Это отсылка к тому, что ты переживала последние полгода?",
                "— Да, «Broken Season» — это как раз-таки период, пока я писала этот альбом, будучи уже одна. Мне понравилось это название и к тому же это был процесс, когда я восстанавливалась. Но, к счастью, у меня получился не суперслезливый альбом, хотя я думала, что он может быть депрессивным.",
                "Как проходила работа над альбомом?",
                "В интервью «The Flow» артистка поделилась подробностями о своём альбоме:",
                "— Ты говорила, что над новым альбомом ты работала с OSA. Он был единственным музыкальным продюсером?",
                "— Да. Мы здесь очень сильно прокачались, многому научились. Много сидели над ним, почти каждый день до семи утра. Как будто прожили с ним отдельную жизнь. Мы практически живём вместе, чтобы было удобнее работать. Иногда я приношу какую-то демку, иногда какой-то текст, и он сразу накидывает мелодию. Всегда всё происходит по-разному, это точно не схема.",
                "— Насколько ты податлива в этой работе? Если Стёпа на чём-то настаивает, на чём-то в музыкальном плане, ты ему доверяешь?",
                "— Тут OSA сидит рядом и пожимает плечами, говорит, что вообще как будто бы у нас очень схожие вкусы, но мы практически не спорили весь альбом. В этом плане мне с ним очень комфортно. Я думаю, что мы ещё будем много работать вместе, потому что я считаю его невероятно талантливым. У него большое будущее, в том числе на Западе.",
            ],
            yandex: "https://music.yandex.ru/album/25458636",
        },
    ]
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/tovarList', (req, res) => {
    const tovarList = db.tovarList;
    res.json(tovarList);
});

app.get('/tovarList/:id', (req, res) => {
    const foundTovar = db.tovarList.find(el => el.id === +req.params.id);
    res.json(foundTovar);
});

app.post('/tovarList', (req, res) => {
    if (!req.body.id || !req.body.title || !req.body.artist || !req.body.price || !req.body.lang) {
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
        return;
    }

    let newTovar = {
        id: req.body.id,
        title: req.body.title,
        artist: req.body.artist,
        price: req.body.price,
        lang: req.body.lang,
        img: [],
        withoutPage: true,
    };

    try {
        db.courses.push(newTovar);
        res.status(HTTP_STATUSES.CREATED_201).json(newTovar);
    } catch (error) {
        console.error('Error adding new tovar:', error);
        res.sendStatus(HTTP_STATUSES.INTERNAL_SERVER_ERROR_500);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});