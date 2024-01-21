// import { ReactComponent as triangle } from "../../../assets/Charts/arrow_drop_up.svg";
import img1 from "../../../assets/images/Location.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 20px;
  /* margin-top: 20px; */
  background: #ffffffcf;
  border-radius: 20px;
  overflow: hidden;
  background: url(${img1}), #ffffffcf;
  background-size: var(--murojaat);
  background-repeat: no-repeat;
  background-position: 95% 14px;
`;
const Card = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
Card.Flex = styled.div`
  width: ${(width) => (width.value ? `${width}` : "100%")};
  display: flex;
  align-items: center;
  &.body {
    padding-top: 20px;
    justify-content: space-between;
  }
  &.rightData {
    padding-top: 10px;
  }
`;
Card.Body = styled.div`
  width: 100%;
`;
Card.Section = styled.div`
  display: block;
`;
Card.Round = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.round1{
      background-color: var(--green);
  }
  &.round2{
      background-color:  #4318FF;
  }
  &.round3{
      background-color:  #18D5FF;
  }
`;
Card.Viloyatlar = styled.div`
width: 100%;
height: fit-content;
background: #FFFFFF;
border-radius: 16px;
padding: 12px 16px;
margin-top: 20px;
`

export { Container, Card };
