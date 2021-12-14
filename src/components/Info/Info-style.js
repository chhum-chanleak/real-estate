import styled from "styled-components";

export const InfoSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

export const Wrapper = styled.div`
  display: grid;
  padding: 3rem calc((100vw - 1300px) / 2);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-template-column: 1fr;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h2 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const RightSection = styled.div`
  display: flext;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;
