import React from "react";
import banner from "../assets/img/banner.jpg";

function HeaderBanner() {
  return (
    <div class="header-banner">
      <div
        class="hero-banner"
        style={{
          background: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div class="hero-banner__text">
          <h1 class="hero-text">-60%</h1>
          <h2 class="hero-text__subtitle">На товары</h2>
        </div>
      </div>

      <div class="header-auth">
        <div class="header-auth__inner">
          <div class="form-group">
            <label for="promocode">Есть промокод?</label>
            <div class="input__group">
              <input type="text" id="promocode" />
              <button>
                <i class="fa fa-check" aria-hidden="true"></i>
              </button>
            </div>

            <a href="#!">Все акции и купоны</a>
          </div>

          <div class="form-group">
            <h5>Вход</h5>

            <p>Войдите для синхронизации корзины с вашим смартфоном</p>

            <button href="#!" class="secondary-btn">
              Вход и регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
