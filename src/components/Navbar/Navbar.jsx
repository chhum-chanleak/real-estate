import avatar from "../../images/house.jpg";
import { menuData } from "../../data/MenuData";
//  components
import { Avatar } from "@mui/material";
import React from "react";
import {
  Logo,
  NavMenu,
  Wrapper,
  NavMenuLinks,
  NavBtn,
  LogoLabel,
  MenuBars,
} from "./Navbar-style";
import { Button1 } from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const data = menuData;

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
        <Button1 to="/">Contact Us</Button1>
      </NavBtn>
      <MenuBars>
        <MenuIcon />
      </MenuBars>
    </Wrapper>
  );
};

export default Navbar;
