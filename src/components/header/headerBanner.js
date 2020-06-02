import React from "react";
import banner from "../../assets/img/banner.jpg";

function HeaderBanner() {
  return (
    <div className="header-banner">
      <div
        className="hero-banner"
        style={{
          background: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-banner__text">
          <h1 className="hero-text">-60%</h1>
          <h2 className="hero-text__subtitle">На товары</h2>
        </div>
      </div>

      <div className="header-auth">
        <div className="header-auth__inner">
          <div className="form-group">
            <label>Есть промокод?</label>
            <div className="input__group">
              <input type="text" id="promocode" />
              <button>
                <i className="fa fa-check" aria-hidden="true"></i>
              </button>
            </div>

            <a href="#!">Все акции и купоны</a>
          </div>

          <div className="form-group">
            <h5>Вход</h5>

            <p>Войдите для синхронизации корзины с вашим смартфоном</p>

            <button href="#!" className="secondary-btn">
              Вход и регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
