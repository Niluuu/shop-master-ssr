import React from "react";
import Advertising from "./advertising";
import Link from "./link";
import MiniProduct from "../../common/miniProduct";
import OrderProducts from "../../common/orderProducts";

function MainSection() {
  return (
    <div className="container">
      <section class="section-main">
        <div class="section-wrap grid-2__col">
          <Advertising />
          <div class="grid-3__col">
            <OrderProducts product={3} />
          </div>
          <Link />
        </div>
        <div class="grid-8__col">
          <MiniProduct product={16} />
        </div>
      </section>
    </div>
  );
}

export default MainSection;
