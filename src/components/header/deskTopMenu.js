import React from "react";

const links = [
  { href: "#", name: "TOP BRANDS", id: Math.random() },
  { href: "#", name: "Акции", id: Math.random() },
  { href: "#", name: "Супермаркет", id: Math.random() },
  { href: "#", name: "Бренды", id: Math.random() },
  { href: "#", name: "Магазины", id: Math.random() },
  { href: "#", name: "Книги", id: Math.random() },
  { href: "#", name: "Электроника", id: Math.random() },
  { href: "#", name: "Одежда и обувь", id: Math.random() },
  { href: "#", name: "Детские товары", id: Math.random() },
  { href: "#", name: "Дом и сад", id: Math.random() },
];

function DeskTopMenu() {
  return (
    <div class="desktop-menu">
      <nav class="navbar navbar-light navbar-expand-lg mainmenu">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            {links.map(({ href, name, id }) => {
              return (
                <li key={id}>
                  <a href={href}>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DeskTopMenu;
