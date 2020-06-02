import React from "react";
import { products } from "./product.json";
import img from "../../assets/img/sm-product.jpg";

function Products() {
  console.log("pro", products);
  return (
    <div className="product-center__block">
      <div className="products-wrapper">
        {products.map((index) => {
          return (
            <a key={Math.random()} href="#!" class="sm-product-item">
              <span class="sm-product__photo">
                <img src={img} alt="" />

                <span class="sm-product__discount">
                  <span>-17%</span>
                </span>
              </span>

              <span class="sm-product__content">
                <span class="product-text__flex">
                  <span class="current-price">1470 P</span>
                  <span class="previous-price">1470 P</span>
                </span>

                <h5 style={{ height: "18px" }}>
                  Масло моторное Mobil 1 ESP 5W-30
                </h5>
              </span>
            </a>
          );
        })}
      </div>
      <a href="#!" class="main-btn">
        Посмотреть все товары
      </a>
    </div>
  );
}

export default Products;
