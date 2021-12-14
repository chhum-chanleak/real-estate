import React, { useState, useRef, useEffect } from "react";
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
} from "./HousesSlide-styles";
import { Button2 } from "../Button/Button";

export const Houses = () => {
  const data = housesData;
  const [current, currentSet] = useState(0);
  const length = data.length;
  const timeout = useRef(null);

  // automate slides

  useEffect(() => {
    const nextSlide = () => {
      currentSet((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 2000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  //  functions

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    currentSet(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    currentSet(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <Wrapper>
      {data.map((item, index) => (
        <HouseSlide key={index}>
          {index === current && (
            <HouseSlider>
              <SlideImage src={item.image} alt="n/a" />
              <SlideContent>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <Button2 to={item.path} primary="true">
                  {item.label}
                  <ArrowRightIcon />
                </Button2>
              </SlideContent>
            </HouseSlider>
          )}
        </HouseSlide>
      ))}
      <SlideButtons>
        <PrevArrow onClick={prevSlide} />
        <NextArrow onClick={nextSlide} />
      </SlideButtons>
    </Wrapper>
  );
};

export default Houses;
