import React from "react";
//  component
import { Content, ContentSection, NavbarWrapper, Wrapper } from "./About-style";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <Wrapper>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <ContentSection>
        <Content variant="h4">Our History</Content>
        <Content variant="body">
          Font size: A A A Based in Veliko Turnovo, in central Bulgaria the
          office was founded in the autumn of 2004 by two Bulgarian businessmen,
          Kaloyan Ganev and Svilen Lubenov, the business is primarily focused on
          the local market. The management at Century Homes has the vision and
          commitment to provide complete customer satisfaction in the sphere of
          Real Estate services and exists to serve the needs of clients who
          appreciate the values of honesty and professionalism. At Century Homes
          we work harder to make your Veliko Tarnovo real estate purchase
          friendly, easy and efficient.
        </Content>
      </ContentSection>
    </Wrapper>
  );
};

export default About;
