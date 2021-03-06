import React from "react";
import img from "../../../assets/img/md-product.jpg";

function ProductAside() {
  return (
    <div className="product-aside__main">
      <div className="product-type__aside">
        {Array.from(Array(7).keys()).map((index) => {
          return (
            <a key={Math.random()} href="#!" className="md-product__item">
              <span className="md-product__photo">
                <img src={img} alt="" />
              </span>

              <span className="md-product__title" style={{ height: "24px" }}>
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
