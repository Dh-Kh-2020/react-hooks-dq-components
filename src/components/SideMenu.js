import React from "react";
import Logo from './Logo';
import MianLinks from './MenuLinks';
import Search from './Search';

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MianLinks />
      <Search />
    </aside>
  );
}

export default SideMenu;
