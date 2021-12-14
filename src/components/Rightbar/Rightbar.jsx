import React, { useState } from "react";
import { housesData } from "../../data/HousesData";
//  components
import { Link } from "react-router-dom";
import {
  Wrapper,
  Label,
  ImgList,
  ImageAvatar,
  CategoryWrapper,
} from "./Rightbar-style";
import { AvatarGroup, ImageListItem } from "@mui/material";

const Rightbar = () => {
  const data = housesData;

  return (
    <Wrapper>
      <Label gutterBottom>Available Houses :</Label>
      <AvatarGroup
        total={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <ImageAvatar sx={{ width: 32 }}>
            <img src={item.image} alt="n/a" />
          </ImageAvatar>
        ))}
      </AvatarGroup>
      <Label gutterBottom>Gallery :</Label>
      <ImgList cols={2} rowHeight={120}>
        {data.map((item) => (
          <ImageListItem>
            <img src={item.image} srcSet="" alt="disconnected" loading="lazy" />
          </ImageListItem>
        ))}
      </ImgList>

      <CategoryWrapper>
        <Label>Search the Internet :</Label>
        <div className="category-links">
          <Link to="/" className="links">
            House
          </Link>
          <Link to="/" className="links">
            Hotel
          </Link>
          <Link to="/" className="links">
            Condo
          </Link>
          <Link to="/" className="links">
            Villa
          </Link>
        </div>
      </CategoryWrapper>
    </Wrapper>
  );
};

export default Rightbar;
