import React from "react";
import img from "../../../assets/img/xl-adv.jpg";

function SaleBanner() {
  return (
    <div class="md-adv">
      <img src={img} alt="" />

      <div class="hero-banner__text">
        <h1 class="hero-text">-60%</h1>
        <h2 class="hero-text__subtitle">Мега скидки</h2>
      </div>
    </div>
  );
}

export default SaleBanner;
