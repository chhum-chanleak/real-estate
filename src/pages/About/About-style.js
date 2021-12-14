import { Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightgray;
  height: 100vh;
`;

export const ContentSection = styled.div`
  position: fixed;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;
`;

export const Content = styled(Typography)``;

export const NavbarWrapper = styled.div`
  background-color: green;
`;
