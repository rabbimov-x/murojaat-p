// import { ReactComponent as triangle } from "../../../assets/Charts/arrow_drop_up.svg";
import img1 from "../../../assets/images/Note.png"
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  width: 100%;
  display: flex;
  &.item{
    padding-top:10px;
    justify-content: space-between;
  }
  &.rightData{
    align-items: center;
    justify-content: space-between;
  }
`;
Card.Body = styled.div`
  width: 100%;
  padding-top: 18px;
`;


Card.Section = styled.div`
display: block;
&.leftSection{
    width: 50%;
    padding-right: 20px;
}
&.rightSection{
    width: 50%;
    
}
.line{
    border-bottom: 1px solid #F3F2FA;
    width: 100%;
    padding-bottom: 10px;
}
.diogram{
  width: calc(95% - 20px);
}
`
Card.Diogram = styled.div`
width: 100%;
height: 6px;
background: #F5F5F5;
border-radius: 4px;


`
Card.InDiogram = styled.div`
width: 50%;
height: 6px;
background: var(--primary1);
border-image-source: linear-gradient(270deg, #0183C6 4.03%, rgba(1, 131, 198, 0.45) 104.03%);
border-radius: 4px;
`

export { Container, Card, };
