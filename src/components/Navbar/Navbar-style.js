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
  background-color: gray;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavLink = css`
  color: black;
  display: flex;
  align-items: center;
  padding: 0 1px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
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
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
  border-radius: 12px;
  color: black;
  font-weight: 600;

  &:hover {
    background: green;
    transfrom: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;
  border-radius: 12px;
  color: black;
  font-weight: 600;

  &:hover {
    background: green;
    transfrom: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
    display: none;
  }
`;

export const MenuBars = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    color: black;
    display: block;
    margin: 12px 24px;
    border: 1px solid black;
    width: 36px;
    padding-left: 5px;
    padding-top: 3px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 8px;
    background-color: lightgray;

    &:hover {
      background: green;
      transfrom: scale(1.05);
    }
  }
`;
