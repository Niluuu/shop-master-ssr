import React from "react";
import Products from "./products";
import ProductAside from "./productAside";
import Advertising from "./advertising";

function ProductSection() {
  return (
    <div class="container">
      <section class="section-main">
        <div class="section-top">
          <h2 class="section-title">Большие упаковки!</h2>
        </div>

        <div className="section-wrap section-grid">
          <ProductAside />
          <Products />
          <Advertising />
        </div>
      </section>
    </div>
  );
}

export default ProductSection;
