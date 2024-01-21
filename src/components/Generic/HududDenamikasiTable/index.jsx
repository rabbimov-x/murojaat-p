import React from "react";
import icon from "../../../assets/images/Dinamika.png";
import { P } from "../../../globalStyled";
import { Container, Card, Table, Tr, Td, Th, Triangle } from "./style";
import { useNavigate } from "react-router-dom";
const HududDenamikasiTable = ({link}) => {
  const navigate = useNavigate();
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
                    <P>Tuman/Shaxar nomi</P>
                  </Th>
                  <Th>
                    <P>2022 yil</P>
                  </Th>
                  <Th>
                    <P>2023 yil</P>
                  </Th>
                  <Th>
                    <P>Farqi</P>
                  </Th>
                  <Th className="last">
                    <P>O’zgarishi</P>
                  </Th>
                </Tr>
              </Table.Thead>
              <Table.Tbody>
                <Tr onClick={() => navigate(link? link : "/")} cursor="true" >
                  <Td><P>1</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--red"} />
                      <P size="--size12" bold="500" cl={"--red"}>
                        -4.45%
                      </P>
                    </Card.Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td><P>2</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--green"} />
                      <P size="--size12" bold="500" cl={"--green"}>
                        +14.45%
                      </P>
                    </Card.Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td><P>3</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--red"} />
                      <P size="--size12" bold="500" cl={"--red"}>
                        +14.45%
                      </P>
                    </Card.Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td><P>4</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--green"} />
                      <P size="--size12" bold="500" cl={"--green"}>
                        +14.45%
                      </P>
                    </Card.Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td><P>5</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--green"} />
                      <P size="--size12" bold="500" cl={"--green"}>
                        +14.45%
                      </P>
                    </Card.Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td><P>6</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--green"} />
                      <P size="--size12" bold="500" cl={"--green"}>
                        +14.45%
                      </P>
                    </Card.Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td><P>7</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--green"} />
                      <P size="--size12" bold="500" cl={"--green"}>
                        +14.45%
                      </P>
                    </Card.Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td><P>8</P></Td>
                  <Td className="names"><P>Yunusobod tumani</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td><P>207</P></Td>
                  <Td>
                    <Card.Flex className="triangle">
                      <P>207</P>
                      <Triangle cl={"--green"} />
                      <P size="--size12" bold="500" cl={"--green"}>
                        +14.45%
                      </P>
                    </Card.Flex>
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

export default HududDenamikasiTable;
