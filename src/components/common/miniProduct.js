import React from 'react'
import img from "../../assets/img/sm-product.jpg";

function MiniProduct({product}) {
  return (
    <React.Fragment>
      {Array.from(Array(product).keys()).map((index) => {
        return (
          <a key={Math.random()} href="#!" class="sm-product-item">
            <span class="sm-product__photo">
              <img src={img} alt="" />
            </span>

            <span class="sm-product__content">
              <h5 style={{ height: "36px" }}>
                Масло моторное Mobil 1 ESP 5W-30
              </h5>
            </span>
          </a>
        );
      })}
    </React.Fragment>
  );
}

export default MiniProduct
