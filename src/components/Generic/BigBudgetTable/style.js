// import { ReactComponent as triangle } from "../../../assets/icons/arrow_drop_up.svg";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 22px 18px;
  /* margin-top: 20px; */
  background: #ffffffcf;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
`;
const Card = styled.div`
  width: 100%;
`;
Card.Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &.triangle {
    justify-content: center;
  }
  .head {
    padding-bottom: 16px;
  }
`;
Card.Body = styled.div`
  width: 100%;
  padding-top: 18px;
`;

Card.Section = styled.div`
  display: block;
  overflow: scroll;
`;

const Table = styled.table`
  width: 14000px;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 12px;
  box-sizing: border-box;
  tr,
  th,
  td {
    box-sizing: border-box;
  }
`;
Table.Thead = styled.thead``;
Table.Tbody = styled.tbody``;
const Tr = styled.tr`
width: max-content;
`;

const ThThree = css`
  padding: 10px;
  height: 40px;
  background: #f5f5f9;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #ebeaf3;
  text-align: center;
  color: var(--shade-0);
`;
const Th = styled.th`
  ${ThThree}
`;
Th.Number = styled.th`
  ${ThThree}
  width: 55px;
  height: 120px;
`;
Th.District = styled.th`
  ${ThThree}
`;
Th.Region = styled.th`
  ${ThThree}
`;
Th.Indicator = styled.th`
  ${ThThree}
  height: 60px;
`;
Th.Plan = styled.th`
  ${ThThree}
  height: 40px;
`;
Th.Fact = styled.th`
  ${ThThree}
  height: 40px;
`;
Th.Percent = styled.th`
  ${ThThree}
  height: 40px;
`;
Th.UnitName = styled.div`
width: fit-content;
height: fit-content ;
  padding: 5px 10px;
  border-radius: 15px;
  color: var(--grey);
  background-color: #F4F7FE;
  border: 1px solid var(--shade-0);
  margin: 10px auto;
`;

const TdThree = css`
  padding: 10px;
  background: #fff;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #ebeaf3;
  text-align: center;
  color: var(--grey);
`;
const Td = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};
  font-style: ${({total})=> total ? "italic" : "normal"};
`;
Td.Number = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  font-style: ${({total})=> total ? "italic" : "normal"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};
`;
Td.District = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};
  font-style: ${({total})=> total ? "italic" : "normal"};
`;
Td.Region = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};
  font-style: ${({total})=> total ? "italic" : "normal"};
`;
Td.Indicator = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};
  font-style: ${({total})=> total ? "italic" : "normal"};
`;
Td.Plan = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};  
  font-style: ${({total})=> total ? "italic" : "normal"};
`;
Td.Fact = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};
  font-style: ${({total})=> total ? "italic" : "normal"};
`;
Td.Percent = styled.th`
  ${TdThree}
  background-color: ${({total})=> total ? "#E3E8EE" : "#fff"};
  color: ${({total})=> total ? "var(--shade-0)" : "var(--grey)"};
  font-style: ${({total})=> total ? "italic" : "normal"};
`;





export { Container, Card, Tr, Td, Th, Table };
