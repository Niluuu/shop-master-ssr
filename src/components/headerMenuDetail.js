import React from "react";

function HeaderMenuDetail() {
  return (
    <div class="header-menu">
      <a href="index.html" class="logo">
        Shop.com
      </a>

      <div class="header-menu__center">
        <button class="header-menu__button">
          <i class="fa fa-align-right" aria-hidden="true"></i>
          Везде
        </button>

        <div class="header-search__block">
          <form action="">
            <div class="header-search__inner">
              <select name="" id="">
                <option value="" hidden="">
                  Везде
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>

              <div class="form-group">
                <input type="text" placeholder="Search" />
              </div>
            </div>

            <button class="search-submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>

      <div class="header-menu__details">
        <ul>
          <li>
            <a href="#!">Войти</a>
          </li>
          <li>
            <a href="#!">Заказы</a>
          </li>
          <li>
            <a href="#!">Избранное</a>
          </li>
          <li>
            <a href="#!">Корзина</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenuDetail;
