import React from "react";
import img from "../../assets/img/sm-product.jpg";

function OrderProducts({ product }) {
  return (
    <React.Fragment>
      {Array.from(Array(product).keys()).map((index) => {
        return (
          <div class="product-block__item">
            <div class="favourite-item">
              <label>
                <input type="checkbox" tabindex="0" />
                <span class="favourite-item__icon"></span>
              </label>
            </div>

            <div class="product-block__photo">
              <img src={img} alt="" />
            </div>

            <div class="product-block__content">
              <div class="product-text__flex">
                <h6 class="current-price">1 470 Р </h6>
                <h6 class="previous-price">2000 Р</h6>
              </div>

              <p style={{ height: "48px" }}>
                Сумка для ноутбука Defender Lite 15.6" черный, карман
              </p>

              <div class="product-popularity">
                <div class="product-popularity__item active">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>

                <div class="product-popularity__item active">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>

                <div class="product-popularity__item active">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>

                <div class="product-popularity__item active">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div class="product-popularity__item">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>

              <a href="#!" class="main-btn">
                Сделать заказ
              </a>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default OrderProducts;
