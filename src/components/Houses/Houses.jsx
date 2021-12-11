import React from "react";
import { housesData } from "../../data/HousesData";
//  components
import {
  Wrapper,
  HouseSlide,
  SlideImage,
  SlideContent,
  ArrowRightIcon,
  SlideButtons,
  PrevArrow,
  NextArrow,
  HouseSlider,
} from "./Houses-Styles";
import { Button2 } from "../Button/Button";

export const Houses = () => {
  const data = housesData;

  return (
    <Wrapper>
      {data.map((item) => (
        <HouseSlide>
          <HouseSlider>
            <SlideImage src={item.image} alt="n/a" />
            <SlideContent>
              <h2>{item.label}</h2>
              <p>{item.price}</p>
              <Button2 to={item.path} primary="true">
                {item.label}
                <ArrowRightIcon />
              </Button2>
            </SlideContent>
          </HouseSlider>
        </HouseSlide>
      ))}
      <SlideButtons>
        <PrevArrow />
        <NextArrow />
      </SlideButtons>
    </Wrapper>
  );
};

export default Houses;
