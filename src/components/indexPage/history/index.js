import React from "react";
import img from "../../../assets/img/history.jpg";

function History() {
  return (
    <section class="section-main history-main">
      <div class="container">
        <div class="section-top">
          <h2 class="section-title">Истории</h2>
          <a href="#!" class="section-top__link">
            Смотреть все
          </a>
        </div>
        <div class="section-wrap history-grid">
          {Array.from(Array(7).keys()).map((index) => {
            return (
              <a key={Math.random()} href="#!" class="history-item">
                <img src={img} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default History;
