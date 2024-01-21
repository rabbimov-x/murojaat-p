import React from "react";
import img1 from "../../../assets/images//House.png"
import { Card, Container, Triangle } from "./style";
import { P } from "../../../globalStyled";
const SohalarCard = () => {
  return (
    <Container>
      <Card>
        <Card.Section className="head">
          <Card.Flex>
            <Card.Icon>
              <img  src={img1} alt="" />
            </Card.Icon>
            <P size="--size18" bold="700" mr=" 0px 0px 0px 5px">
              Uy-joy kommunal xo’jaligi
            </P>
          </Card.Flex>
        </Card.Section>
        <Card.Section>
          <Card.Body>
            <Card.Flex>
              <Card.Flex width="40%">
                <Card.Section>
                  <Card.Round></Card.Round>
                </Card.Section>
                <Card.Section>
                  <P size="--size12" bold="500" cl="--shade-5">
                    2022 yil
                  </P>
                  <P size="--size18" bold="700" >
                    120 350
                  </P>
                </Card.Section>
              </Card.Flex>
              <Card.Flex width="55%">
                <Card.Section>
                  <Card.Round className="round" />
                </Card.Section>
                <Card.Section>
                  <Card.Flex>
                    <P size="--size12" bold="500" cl="--shade-5">
                      2023 yil
                    </P>
                    <Card.Flex width="50%" bold="700">
                      <Triangle />
                      <P size="--size12" bold="500" cl="--green" mr = "0 0 0 20px">
                        +14.45%
                      </P>
                    </Card.Flex>
                  </Card.Flex>
                  <P size="--size18" bold="700" mr="5px 0px 0px opx">
                    120 350
                  </P>
                </Card.Section>
              </Card.Flex>
            </Card.Flex>
            <Card.Section className="diogram">
              <Card.Diogram>
                <Card.InDiogram></Card.InDiogram>
              </Card.Diogram>
            </Card.Section>
            <Card.Section>
              <Card.Diogram>
                <Card.InDiogram className="inDiogram"></Card.InDiogram>
              </Card.Diogram>
            </Card.Section>
          </Card.Body>
        </Card.Section>
      </Card>
    </Container>
  );
};

export default SohalarCard;
