import React from "react";
import CentredAdvertising from "./centredAdvertising";
import Catalog from "./catalog";
import OrderProducts from "../../common/orderProducts";
import FavouriteItem from "../../common/favouriteItem";
import SaleBanner from "./saleBanner";

function CategorySection() {
  return (
    <div className="container">
      <section class="section-main">
        <div class="grid-2__col">
          <CentredAdvertising />
          <div class="grid-3__col">
            <OrderProducts product={6} />
          </div>
          <Catalog />
        </div>
      </section>
      <section class="section-main">
        <div class=" grid-2__col">
          <div>
            <div class="grid-3__col catalog__block">
              <FavouriteItem product={6} />
            </div>
            <a href="#!" class="main-btn">
              Посмотреть все товары
            </a>
          </div>
          <SaleBanner />
        </div>
      </section>
      <section class="section-main">
        <div class="section-top">
          <h2 class="section-title">Рекомендации для вас</h2>
        </div>

        <div class="section-wrap grid-5__col">
          <OrderProducts product={5} />
        </div>
      </section>
    </div>
  );
}

export default CategorySection;
