import React from "react";
import { menuData } from "../../data/MenuData";
import { Button1 } from "../Button/Button";
// components
import {
  Icon,
  CloseIcon,
  MenuWrapper,
  Wrapper,
  Menu,
  MenuLinks,
  ButtonWrapper,
  Button,
} from "./HamburgerIcon-style";
const data = menuData;
const HamburgerIcon = ({ isOpen, isOpenSet }) => {
  // functions
  const handleClose = () => {
    isOpenSet(!isOpen);
  };

  return (
    <Wrapper>
      <Icon>
        <CloseIcon onClick={handleClose} />
      </Icon>
      <MenuWrapper>
        <Menu>
          {data.map((item) => (
            <MenuLinks to={item.link}>{item.title}</MenuLinks>
          ))}
        </Menu>
        <ButtonWrapper>
          <Button round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </ButtonWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};

export default HamburgerIcon;
