import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { css } from "styled-components/macro";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const Wrapper = styled.div`
  // center a div
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex: 1;
`;

export const HouseSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HouseSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

export const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
  }
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h2 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ArrowRightIcon = styled(ArrowRightAltIcon)``;

export const arrowButtons = css`
  width: 60px;
  height: 60px;
  color: #fff;
  background: darkblue;
  border-radius: 50px;
  cursor: pointer;
  padding: 12px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transfrom: scale(1.05);
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

export const SlideButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
