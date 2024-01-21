import React from "react";
import icon from "../../../assets/images/Tashkilot.png";
import { P } from "../../../globalStyled";
import { Container, Card, Table, Tr, Td, Th } from "./style";
const TashkilotlarDenamikasiTable = () => {
  return (
    <Container>
      <Card>
        <Card.Section>
          <Card.Flex className="head">
            <Card.Icon>
              <img src={icon} alt="" />
            </Card.Icon>
            <P size="--size24" bold="700" mr="0 0 0 20px">
              Murojaatlar eng ko’p tushgan tuman/shaxar dinamikasi
            </P>
          </Card.Flex>
        </Card.Section>
        <Card.Body>
          <Card.Section>
            <Table>
              <Table.Thead>
                <Tr>
                  <Th className="first">
                    <P>T/R</P>
                  </Th>
                  <Th className="names">
                    <P>Tuman/Shxsacsaxar nomi</P>
                  </Th>
                  <Th className="last">
                    <P>Jami</P>
                  </Th>
                </Tr>
              </Table.Thead>
              <Table.Tbody>
                <Tr>
                  <Td><P>1</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>2</P></Td>
                  <Td className="names"><P>Olmazor tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>2</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>3</P></Td>
                  <Td className="names"><P>Navoiy Shaxri</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>4</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>5</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>6</P></Td>
                  <Td className="names"><P>Dehqonood tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>7</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>8</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                <Tr>
                  <Td><P>9</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                </Tr>
                
              </Table.Tbody>
            </Table>
          </Card.Section>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TashkilotlarDenamikasiTable;
