import React from "react";
import MiniProduct from "../../common/miniProduct";

function Catalog() {
  return (
    <div className="section-main">
      <div class="section-top">
        <h2 class="section-title">Каталог по комнатам</h2>
        <div class="section-wrap grid-6__col">
          <MiniProduct product={6} />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
