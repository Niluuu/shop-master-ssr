import React from "react";

function HeaderMenuDetail() {
  return (
    <div className="header-menu">
      <a href="index.html" className="logo">
        Shop.com
      </a>

      <div className="header-menu__center">
        <button className="header-menu__button">
          <i className="fa fa-align-right" aria-hidden="true"></i>
          Везде
        </button>

        <div className="header-search__block">
          <form action="">
            <div className="header-search__inner">
              <select name="" id="">
                <option value="" hidden="">
                  Везде
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>

              <div className="form-group">
                <input type="text" placeholder="Search" />
              </div>
            </div>

            <button className="search-submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="header-menu__details">
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
