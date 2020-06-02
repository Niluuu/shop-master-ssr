import React from "react";
import img from "../../assets/img/md-product.jpg";
import { products } from "./product.json";

function ProductAside() {
  return (
    <div class="product-aside__main">
      <div class="product-type__aside">
        {products.map((index) => {
          return (
            <a key={Math.random()} href="#!" class="md-product__item">
              <span class="md-product__photo">
                <img src={img} alt="" />
              </span>

              <span class="md-product__title" style={{ height: "24px" }}>
                <h5>Продукты питания</h5>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ProductAside;
