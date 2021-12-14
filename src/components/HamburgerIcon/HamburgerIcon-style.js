import styled from "styled-components";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button1 } from "../Button/Button";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: darkgray;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 1;
  top: 0;
  color: green;
`;

export const Icon = styled.div`
  position: absolute;
  top: 12px;
  right: 30px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(CancelIcon)`
  color: #000d1a;
`;

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
`;

export const Menu = styled.div``;

export const MenuLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin: 48px 0;

  &:hover {
    color: #000d1a;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 240px;
`;

export const Button = styled(Button1)`
  background-color: green;
  padding: 8px 16px;
  font-weight: 600;
`;
