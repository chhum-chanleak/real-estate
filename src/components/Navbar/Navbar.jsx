import { useState } from "react";
import avatar from "../../images/house.jpg";
import { menuData } from "../../data/MenuData";
//  components
import { Avatar } from "@mui/material";

import {
  Logo,
  NavMenu,
  Wrapper,
  NavMenuLinks,
  NavBtn,
  LogoLabel,
  MenuBars,
} from "./Navbar-style";
import { Button1, Button3 } from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

const Navbar = () => {
  const data = menuData;
  const [isOpen, isOpenSet] = useState(false);

  // functions

  const toggleHamburger = () => {
    isOpenSet(!isOpen);
  };

  return (
    <Wrapper>
      <Logo to="/">
        <Avatar alt="house" src={avatar} />
        <LogoLabel>Housing</LogoLabel>
      </Logo>
      <NavMenu>
        {data.map((item) => (
          <NavMenuLinks to={item.link}>{item.title}</NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button1 to="/Contact">Contact Us</Button1>
      </NavBtn>
      <MenuBars>
        <MenuIcon onClick={toggleHamburger} />
      </MenuBars>
      {isOpen && <HamburgerIcon isOpen={isOpen} isOpenSet={isOpenSet} />}
    </Wrapper>
  );
};

export default Navbar;
