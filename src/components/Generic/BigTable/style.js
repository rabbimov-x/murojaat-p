// import { ReactComponent as triangle } from "../../../assets/icons/arrow_drop_up.svg";
import styled from "styled-components";

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
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 12px;
  box-sizing: border-box;
  tr,
  th,
  td {
    box-sizing: border-box;
  }
  .first {
    border-radius: 12px 0 0 12px;
    border: 1px solid #ebeaf3;
  }
  .first-top {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
  .first-bottom {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .last-bottom {
    border-radius: 0 0 12px 0;
  }
  .last-top {
    border-radius: 0 12px 0 0;
  }
`;
Table.Thead = styled.thead``;
Table.Tbody = styled.tbody`
tr:nth-child(even) {
  background-color: #FBFCFD;
  td:first-child{
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  td:last-child{
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
`;
const Tr = styled.tr`
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  &.names {
    text-align: left;
  }
  &:first-child {
  width: var(--tableNumber);
}
`;
const Th = styled.th`
  padding: 10px;
  background: #f5f5f9;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #ebeaf3;
  text-align: center;
  &.names {
    text-align: left;
  }
`;
Th.Name = styled.th`
  width: 50%;
  padding: 10px;
  background: #f5f5f9;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #ebeaf3;
  text-align: left;
`;
Th.Murojatlar = styled.th`
  min-width: 40%;
  padding: 10px;
  background: #f5f5f9;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #ebeaf3;
  text-align: center;
`;

export { Container, Card, Tr, Td, Th, Table };
