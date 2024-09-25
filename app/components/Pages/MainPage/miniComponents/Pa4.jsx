import s from "./../MainPage.module.css";

export function Pa4() {
  
  const reasons = [
    {
      title: "Широкий выбор",
      text: "Наш магазин предлагает широкий ассортимент виниловых пластинок различных жанров, от классики до современных хитов. Мы постоянно пополняем свой каталог новыми релизами и редкими изданиями, чтобы вы могли найти именно то, что искали.",
    },
    {
      title: "Качество и подлинность",
      text: "Мы уделяем особое внимание качеству и подлинности каждой пластинки. Каждая пластинка проходит тщательный отбор и проверку, чтобы гарантировать нашим клиентам только лучшее.",
    },
    {
      title: "Лучшие цены",
      text: "Наш магазин предлагает конкурентоспособные цены на все виниловые пластинки, чтобы вы могли приобрести желаемый альбом по доступной цене.",
    },
    {
      title: "Быстрая доставка",
      text: "Мы гарантируем быструю и надежную доставку виниловых пластинок в любую точку страны. Вы можете быть уверены, что ваша заказ придет вовремя и в идеальном состоянии.",
    },
    {
      title: "Клиентская поддержка",
      text: "Наш магазин известен своей отличной клиентской поддержке. Если у вас возникнут какие-либо вопросы или проблемы, наши специалисты всегда готовы помочь и ответить на все ваши вопросы.",
    },
    {
      title: "Благотворительность",
      text: "При покупке виниловых пластинок в нашем магазине, вы можете принимать участие в благотворительных акциях и помогать тем, кто нуждается в помощи. Мы уверены, что музыка может объединить людей и делать мир лучше.",
    },
    {
      title: "Комплексное обслуживание",
      text: "В нашем магазине вы можете не только купить виниловые пластинки, но и получить комплексное обслуживание по подбору и настройке музыкального оборудования. Наши специалисты помогут вам выбрать идеальный вариант на подарок или для коммерческого использования.",
    },
    {
      title: "Наушники",
      text: "В комплекте с виниловыми пластинками могут поставляться наушники к инструменту, адаптер переменного тока, пюпитр. Производитель обязательно кладет руководство пользователя с инструкциями по подключению, использованию, устранению типовых неполадок.",
    },
    {
      title: "Эксклюзивные издания",
      text: "Наш магазин предлагает эксклюзивные грампластинки в подарок ценителям качественного винила и хорошей музыки. Вы можете быть уверены, что при покупке у нас, вы получите не только качественную пластинку, но и уникальный подарок.",
    },
  ];
  const displayReasons = reasons.map((reason, i) => <Reason reason={reason} key={i} />);

  return (
    <div className={s.pa4}>
      <div className={s.pa4_container}>
        <h3>Почему выбирают нас?</h3>
        <ul className={s.pa4_ul}>{displayReasons}</ul>
      </div>
    </div>
  );
}

function Reason({ reason }) {
  return (
    <li className={s.pa4_li}>
      <span className={s.pa4_li_tittle}>{reason.title}: </span>
      {reason.text}
    </li>
  );
}