import { Avatar, ImageList, Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: ;
  margin: 62px 16px;
  position: fixed;
  top: 0;

  .category-links {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
      /* display: none; */
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-bottom: 1px;
    text-decoration: none;
    border-radius: 12px;
    padding: 1px 4px;
    width: 36%;
    font-size: 16px;
    margin-left: 92px;

    &:hover {
      background: darkgray;
      transfrom: scale(1.05);
    }
    @media only screen and (max-width: 768px) {
      /* display: none; */
      font-size: 11.5px;
      margin-bottom: 0;
      margin-left: 46px;
    }
  }
  @media only screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const Label = styled(Typography)`
  display: flex;
  justify-content: center;
  font-style: italic;
  font-size: 20px;
  margin: 12px 0;
  width: 100%;
`;

export const ImgList = styled(ImageList)`
  @media only screen and (max-width: 768px) {
    width: 148px;
    height: 320px;
  }
`;

export const ImageAvatar = styled(Avatar)`
  @media only screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
