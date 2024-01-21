import styled from "styled-components";

const BigContainer = styled.div`
  width: 100%;
`;
const HomeBody = styled.div`
  width: 100%;
  display: flex;
  padding-top: 24px;
  flex-wrap: wrap;
`;
const BodyLeft = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    width: ${({ min }) => (min ? "50%" : "80%")};
  }
  @media (max-width: 1200px) {
    width: ${({ min }) => (min ? "50%" : "100%")};
  }
`;

export { BigContainer, HomeBody, BodyLeft };
