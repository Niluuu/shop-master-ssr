import Link from "next/link";

const links = [
  { href: "#", name: "Мобильное приложение" },
  { href: "#", name: "Реферальная программа" },
  { href: "#", name: "Подарочные сертификаты" },
  { href: "#", name: "Пункты выдачи" },
  { href: "#", name: "Бесплатная доставка" },
  { href: "#", name: "Помощь" },
];

export default function Header() {
  return (
    <div>
      <div class="header-top">
        <div class="container">
          <div class="header-top__wrap">
            <a href="#!" class="header-top__location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              Москва
            </a>

            <div class="header-top__link">
              <ul>
                {links.map(({ href, name }, index) => {
                  return (
                    <li>
                      <a href={href}>{name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
