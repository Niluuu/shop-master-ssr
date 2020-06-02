import React from "react";
import HeaderTop from "./headerTop";
import HeaderMenuDetail from "./headerMenuDetail";
import HeaderBanner from "./headerBanner";
import DeskTopMenu from "./deskTopMenu";

function Header() {
  return (
    <div>
      <HeaderTop />
      <div className="container">
        <HeaderMenuDetail />
        <DeskTopMenu />
        <HeaderBanner />
      </div>
    </div>
  );
}

export default Header;
