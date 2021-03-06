import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Button1 = styled(Link)`
  background-color: ${({ primary }) => (primary ? "#000d1a" : "CDA53F")};
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  height: 52px;
  width: 120px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

export const Button2 = styled(Link)`
  background-color: ${({ primary }) => (primary ? "#000d1a" : "CDA53F")};
  text-decoration: none;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 12px;
  height: 42px;
  width: 200px;
  padding: 6px 44px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`;

export const Button3 = styled(Button)`
  background-color: ${({ primary }) => (primary ? "#000d1a" : "CDA53F")};
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  height: 52px;
  width: 120px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;
