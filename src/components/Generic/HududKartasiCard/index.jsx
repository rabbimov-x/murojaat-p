import React from "react";
import karta from "../../../assets/images/karta.png";
import { Card, Container } from "./style";
import { P } from "../../../globalStyled";
const HududKartasiCard = () => {
  return (
    <Container>
      <Card>
        <Card.KartaSection>
          <Card.Img>
            <img src={karta} alt="" />
          </Card.Img>
          <Card.Flex className="title">
            <P size="--size24" bold="700">
              O‘zbekiston Respublikasi
            </P>
            <P size="--size18" bold="700" cl="--violet2">
              Murojaatlar soni: 188 528
            </P>
          </Card.Flex>
        </Card.KartaSection>
        <Card.Body>
          <Card.Section className="line">
            <P size="--size14" bold="500" cl="--shade-5" >
              01.09.2022
            </P>
            <Card.Flex>
                <div>

              <P size="--size22" bold="500" w = "max-content" >
                188 528
              </P>
                </div>
              <Card.Flex className = "foiz" width="34px" bold="700">
                <P size="--size12" bold="500" cl="--green" mr="0px 0px 0px 8px" >
                  15%
                </P>
              </Card.Flex>
            </Card.Flex>
          </Card.Section>
          <Card.Section className="line">
            <P size="--size14" bold="500" cl="--shade-5" >
              01.09.2022
            </P>
            <Card.Flex>
                <div>

              <P size="--size22" bold="500" w = "max-content" >
                188 528
              </P>
                </div>
              <Card.Flex className = "foiz" width="34px" bold="700">
                <P size="--size12" bold="500" cl="--green" mr="0px 0px 0px 8px" >
                  15%
                </P>
              </Card.Flex>
            </Card.Flex>
          </Card.Section>
          <Card.Section className="line">
            <P size="--size14" bold="500" cl="--shade-5" >
              01.09.2022
            </P>
            <Card.Flex>
                <div>

              <P size="--size22" bold="500" w = "max-content" >
                188 528
              </P>
                </div>
              <Card.Flex className = "foiz" width="34px" bold="700">
                <P size="--size12" bold="500" cl="--green" mr="0px 0px 0px 8px" >
                  15%
                </P>
              </Card.Flex>
            </Card.Flex>
          </Card.Section>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HududKartasiCard;
