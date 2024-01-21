// import { ReactComponent as triangle } from "../../../assets/Charts/arrow_drop_up.svg";
import img1 from "../../../assets/images/Massage.png"
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: fit-content;
  min-height: 100%;
  padding: 24px 20px;
  /* margin-top: 20px; */
  background: #ffffffcf;
  border-radius: 20px;
  overflow: hidden;
  background: url(${img1} ), #ffffffcf;
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
  width: ${(width) => (width ? `${width}` : "100%")};
  display: flex;
  &.body{
    padding-top:20px;
    justify-content: space-between;
  }
  &.rightData{
    padding-top: 10px;
  }
`;
Card.Body = styled.div`
  width: 100%;
  padding-top: 18px;
`;
Card.Chart = styled.div`
  position: relative;
  margin-top: 20px;
  width: 70px;
  padding: 70px;
  border-radius: 8px;
  background-image: conic-gradient(#0183C6 234deg,#42BCFB 37deg,#42BCFB 284deg,#E5EAF1 124deg);
  border-radius: 50%;
`;
Card.ChartIn = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 85%;
height: 85%;
transform: translate(-50%, -50%);
background-color: #ffffff;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.foiz{
    border-radius: 6px;
    padding: 5px 6px 5px 6px;
    margin-top: 5px;
    background: #05CD991A;
}
`

Card.Section = styled.div`
display: block;
&.leftSection{
    width: 50%;
}
&.rightSection{
    width: 50%;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
}
.line{
    border-bottom: 1px solid #F3F2FA;
    width: 100%;
    padding-bottom: 10px;
}
`
Card.Round = styled.div`
  width: 8px;
  height: 8px;
  margin:3px 4px;
  border-radius:50%;
  &.round1{
background-color: var(--primary1);
  }
  &.round2{
background-color: var(--shade-4);
  }
  &.round3{
background-color: var(--primary2);
  }
`;

export { Container, Card, };
