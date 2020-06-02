import React from "react";

const links = [
  { href: "#", name: "Мобильное приложение" },
  { href: "#", name: "Реферальная программа" },
  { href: "#", name: "Подарочные сертификаты" },
  { href: "#", name: "Пункты выдачи" },
  { href: "#", name: "Бесплатная доставка" },
  { href: "#", name: "Помощь" },
];

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top__wrap">
          <a href="#!" className="header-top__location">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Москва
          </a>

          <div className="header-top__link">
            <ul>
              {links.map(({ href, name }, index) => {
                return (
                  <li key={Math.random()}>
                    <a href={href}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
