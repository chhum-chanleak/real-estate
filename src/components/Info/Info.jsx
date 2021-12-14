import React from "react";
import { infoData1, infoData2 } from "../../data/InfoData";
//  components
import { InfoSection, LeftSection, RightSection, Wrapper } from "./Info-style";
import { Button2 } from "../Button/Button";
import { ArrowRightIcon } from "../HousesSlide/HousesSlide-styles";

const Info = () => {
  const data1 = infoData1;

  return (
    <InfoSection>
      <Wrapper>
        <LeftSection>
          <h2>{data1.heading}</h2>
          <p>{data1.paragraph1}</p>
          <Button2 to="/homes" primary="true">
            {data1.buttonLabel}
            <ArrowRightIcon />
          </Button2>
        </LeftSection>
        <RightSection>
          <img src={data1.image} alt="n/a" />
        </RightSection>
      </Wrapper>
    </InfoSection>
  );
};

export default Info;
