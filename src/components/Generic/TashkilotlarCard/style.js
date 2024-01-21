import { ReactComponent as triangle } from "../../../assets/icons/arrow_drop_up.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
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

const Triangle = styled(triangle)`
  width: 16px;
  height: 16px;
  margin-left: 5px;
  & path {
    fill: ${({ cl }) => (cl === "red" ? `var(--red)` : `var(--green)`)};
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  .first {
    border-radius: 12px 0 0 12px;
  }
  .last {
    border-radius: 0 12px 12px 0;
  }
`;
Table.Thead = styled.thead``;
Table.Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #fbfcfd;
    td:first-child {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
    td:last-child {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;
const Tr = styled.tr``;
const Td = styled.td`
  padding: 10px;
  text-align: center;
  &.names {
    text-align: left;
  }
  &:first-child {
    width: var(--tableNumber);
  }
  @media (max-width: 1440px) {
        padding: 10px 5px;
    }
`;
const Th = styled.th`
  padding: 10px;
  background: #a3aed00f;
  text-align: center;
  &.names {
    text-align: left;
  }
  @media (max-width: 1440px) {
        padding: 10px 5px;
    }
`;

export { Container, Card, Tr, Td, Th, Table, Triangle };
