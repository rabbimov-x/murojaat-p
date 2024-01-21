import { ReactComponent as triangle } from "../../../assets/icons/arrow_drop_up.svg";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  /* margin-top: 20px; */
  background-color: var(--shade-1);
  border-radius: 20px;
  overflow: hidden;
`;
const Card = styled.div`
  width: 100%;
  
`;
Card.Section = styled.div`
  &.diogram{
    padding: 10px 0 ;
  }
  
`;
Card.Flex = styled.div`
  width: ${(width) => width ? `${width}` : "100%"};
  display: flex;
  position: relative;
  &.head{
      align-items: center;
  }
`;
Card.Body = styled.div`
  width: 100%;
  padding-top: 18px;
`;
const Triangle = styled(triangle)`
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;
Card.Round = styled.div`
  width: 8px;
  height: 8px;
  margin:3px 4px;
  background-color:  var(--primary1);
  border-radius:50%;
  &.round{
background-color: var(--violet1);
  }
`;
Card.Diogram = styled.div`
width: 100%;
height: 22px;
background: #F5F5F5;
border-radius: 4px;
`
Card.InDiogram = styled.div`
width: 50%;
height: 22px;
background: var(--primary1);
border-radius: 4px;
&.inDiogram{
    width: 60%;
    background: var(--violet1);
}
`
Card.Icon = styled.div`
  width: 36px;
  height: 36px;
  padding: 6px;
  background-color: var(--shade-3);
  border-radius: 8px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export { Container, Card, Triangle };
