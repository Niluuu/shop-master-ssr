import React from "react";
import img from "../../assets/img/sm-product.jpg";

function FavouriteItem({ product }) {
  return (
    <React.Fragment>
      {Array.from(Array(product).keys()).map((index) => {
        return (
          <a href="#!" class="sm-product-item">
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
    </React.Fragment>
  );
}

export default FavouriteItem;
