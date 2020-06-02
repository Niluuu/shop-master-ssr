import React from "react";
import ProductAside from "./productAside";
import Advertising from "./advertising";
import FavouriteItem from "../../common/favouriteItem";

function ProductSection() {
  return (
    <div className="container">
      <section className="section-main">
        <div className="section-top">
          <h2 className="section-title">Большие упаковки!</h2>
        </div>

        <div className="section-wrap section-grid">
          <div className="product-center__block">
            <div className="products-wrapper">
              <FavouriteItem product={7} />
            </div>
            <a href="#!" class="main-btn">
              Посмотреть все товары
            </a>
          </div>
          <ProductAside />
          <Advertising />
        </div>
      </section>
    </div>
  );
}

export default ProductSection;
