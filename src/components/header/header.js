import React from "react";
import HeaderTop from "./headerTop";
import HeaderMenuDetail from "./headerMenuDetail";
import HeaderBanner from "./headerBanner";
import DeskTopMenu from "./deskTopMenu";
import HeaderBottom from "./headerBottom";

function Header() {
  return (
    <header className="header-block home-header">
      <HeaderTop />
      <div className="container">
        <HeaderMenuDetail />
        <DeskTopMenu />
        <HeaderBanner />
        <HeaderBottom />
      </div>
    </header>
  );
}

export default Header;
