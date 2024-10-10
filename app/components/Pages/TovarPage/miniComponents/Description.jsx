import s from "./../TovarPage.module.css";

export function Description({ description }) {

  const displayDescription = description.map((el) => (
    <Paragraph paragraph={el.text} key={el.id} />
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