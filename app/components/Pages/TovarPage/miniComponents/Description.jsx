import s from "./../TovarPage.module.css";

export function Description({ tovar }) {
  // Треклист товара
  const thisDescription = tovar.description;
  const displayDescription = thisDescription.map((el, i) => (
    <Paragraph paragraph={el} key={i} />
  ));

  return (
    <div className={s.description}>
      <h2 className={s.tittle}>О релизе</h2>
      <div className={s.description_container}>{displayDescription}</div>
    </div>
  );
}

function Paragraph({ paragraph }) {
  return <p>{paragraph}</p>;
}
