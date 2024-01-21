import img1 from "../../../assets/images/Naqsh2.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  /* margin-top: 20px; */
  background: #ffffffcf;
  border-radius: 20px;
  overflow: hidden;
  background: url(${img1}), #ffffffcf;
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: 100% 100%;
`;
const Card = styled.div`
  width: 100%;
`;
Card.Flex = styled.div`
  width: ${(width) => (width.value ? `${width}` : "100%")};
  display: flex;
  &.foiz{
      align-items: center;
      p{
        padding: 2px 6px;
        background: #05CD991A;
        border-radius: 6px;
      }
  }
  &.title{
    position: absolute;
    top: 10px;
    right: 10px;
    justify-content: center;
    align-items: end;
    flex-direction: column;
  }
`;
Card.Body = styled.div`
  width: 100%;
`;
Card.Section = styled.div`
  width: 100%;
  display: block;
  position: relative;
  top: -120px;
  height: 80px;
  &.line{
    width: fit-content;
    margin-top: 18px;
    padding: 10px 75px 10px 20px;
    border-radius: 12px;
    background: #F5FCFF;
}
@media (max-width: 757px) {
top: 0;
}
`;
Card.KartaSection = styled.div`
    width: 100%;
    position: relative;
    display: block;
`;
Card.Img = styled.div`
width: 100%;
img{
    width: 100%;
}
`



export { Container, Card };
