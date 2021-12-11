import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const Wrapper = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: 1px 2px;
  z-index: 100;
  position: fixed;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  ${NavLink}
  color: white;
  margin-left: 12px;
`;

export const LogoLabel = styled(Typography)`
  color: black;
  margin-left: 12px;

  :last-of-type {
    margin-left: 8px;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
  margin-left: 12px;
  width: 140px;

  @media only screen and (max-width: 768px) {
    width: 80px;
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;

  @media only screen and (max-width: 768px) {
    width: 80px;
    display: none;
  }
`;

export const MenuBars = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    color: white;
    display: block;
    margin: 12px 12px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
