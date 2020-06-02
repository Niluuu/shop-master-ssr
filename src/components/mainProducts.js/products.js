import React from "react";
import { products } from "./product.json";
import img from "../../assets/img/sm-product.jpg";

function Products() {
  return (
    <div className="product-center__block">
      <div className="products-wrapper">
        {products.map((index) => {
          return (
            <a key={Math.random()} href="#!" className="sm-product-item">
              <span className="sm-product__photo">
                <img src={img} alt="" />

                <span className="sm-product__discount">
                  <span>-17%</span>
                </span>
              </span>

              <span className="sm-product__content">
                <span className="product-text__flex">
                  <span className="current-price">1470 P</span>
                  <span className="previous-price">1470 P</span>
                </span>

                <h5 style={{ height: "18px" }}>
                  Масло моторное Mobil 1 ESP 5W-30
                </h5>
              </span>
            </a>
          );
        })}
      </div>
      <a href="#!" className="main-btn">
        Посмотреть все товары
      </a>
    </div>
  );
}

export default Products;
