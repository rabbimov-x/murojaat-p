import React from "react";
// import icon from "../../../assets/images/Dinamika.png";
import { P } from "../../../globalStyled";
import { Container, Card, Table, Tr, Td, Th } from "./style";
const BigTable = () => {
  return (
    <Container>
      <Card>
        <Card.Section>
          <Card.Flex className = "head">
            <P size="--size24" bold="700" mr="0 0 0 20px">
            Bog’ot tumani aholisidan eng ko’p kelib tushgan masalalar dinamikasi
            </P>
          </Card.Flex>
        </Card.Section>
        <Card.Body>
        <Card.Section>
          <Table>
            <Table.Thead>
            <Tr className="first-top">
              <Th className="first" rowSpan={2}>
                <P>T/R</P>
              </Th>
              <Th.Name className="names" rowSpan = {2} >
                <P>Masala nomi</P>
              </Th.Name>
              <Th colSpan={4} className="last-top">
                <P>Murojaat masalari soni</P>
              </Th>
            </Tr>
            <Tr className="first-top">
              <Th>
                <P>2022 yil</P>
              </Th>
              <Th>
                <P>2023 yil</P>
              </Th>
              <Th>
                <P>Farqi</P>
              </Th>
              <Th className="last-bottom">
                <P>O’zgarishi</P>
              </Th>
            </Tr>
            </Table.Thead>
            <Table.Tbody>
            <Tr>
              <Td><P>1</P></Td>
              <Td className="names"><P>Yunusobod tumani </P></Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
            </Tr>
            <Tr>
              <Td><P>2</P></Td>
              <Td className="names"><P>Yunusobod tumani </P></Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
            </Tr>
            <Tr>
              <Td><P>3</P></Td>
              <Td className="names"><P>Yunusobod tumani </P></Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
            </Tr>
            <Tr>
              <Td><P>4</P></Td>
              <Td className="names"><P>Yunusobod tumani </P></Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
            </Tr>
            <Tr>
              <Td><P>5</P></Td>
              <Td className="names"><P>Yunusobod tumani </P></Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
            </Tr>
            <Tr>
              <Td><P>6</P></Td>
              <Td className="names"><P>Yunusobod tumani </P></Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
              <Td>
                  <P>207</P>
              </Td>
            </Tr>
            
            </Table.Tbody>
          </Table>
        </Card.Section>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BigTable;
