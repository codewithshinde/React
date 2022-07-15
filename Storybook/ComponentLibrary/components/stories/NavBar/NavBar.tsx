import React, { useState, useEffect, useRef } from "react";
import {
  NavigationBar,
  LogoText,
  Menu,
  MenuItems,
  MenuLinks,
  BurgerIcon,
} from "./styled";

const NavBar: React.FC<{}> = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <NavigationBar>
      <LogoText>
        <p className="logo">
          <span style={{ fontWeight: "bold" }}>Launch</span>
          <span
            style={{
              fontStyle: "italic",
              fontFamily: "PlayFair Display, sans-serif",
              color: "#37BC96",
            }}
          >
            House
          </span>
        </p>
      </LogoText>
      <BurgerIcon onClick={handleClick}>
        <p>{active ? "Close" : "Open"}</p>
      </BurgerIcon>
      <Menu viewInMobile={active}>
        <MenuItems>
          <MenuLinks>Test</MenuLinks>
        </MenuItems>
        <MenuItems>
          <MenuLinks>Test</MenuLinks>
        </MenuItems>
        <MenuItems>
          <MenuLinks>Test</MenuLinks>
        </MenuItems>
        <MenuItems>
          <MenuLinks>Test</MenuLinks>
        </MenuItems>
      </Menu>
    </NavigationBar>
  );
};

export default NavBar;
