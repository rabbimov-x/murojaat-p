import React from "react";
import { Card, Container } from "./style";
import { P } from "../../../globalStyled";
const MurojaatlarCard = () => {

  return (
    <Container>
      <Card>
        <Card.Section>
          <Card.Flex>
            <P size="--size24" bold="700" >
              Murojaatlar soni
            </P>
          </Card.Flex>
        </Card.Section>
        <Card.Section>
          <Card.Flex className = "body">    
            <Card.Section className = "leftSection">
              <P size="--size14" cl = "--shade-5" >
              Barcha murojaatlar
              </P>
              <Card.Chart >
                <Card.ChartIn>
                        <P size="--size18" bold="700" mr="0px 0px 0px opx">
                            120 350
                        </P>
                        <P size="--size12" bold="500" cl="--green" className="foiz">
                        +2.45%
                      </P>
                </Card.ChartIn>
              </Card.Chart>
            </Card.Section>
            <Card.Section className = "rightSection">
            <Card.Flex width="55%" className = "rightData"> 
                <Card.Section>
                  <Card.Round className="round1" />
                </Card.Section>
                <Card.Section className = "line">
                  <Card.Flex>
                    <P size="--size12" bold="500" cl="--shade-5">
                    Yangi
                    </P>
                    <Card.Flex width="50%" bold="700">
                      <P size="--size12" bold="500" cl="--green" mr = " 0 0 0 7px">
                        15%
                      </P>
                    </Card.Flex>
                  </Card.Flex>
                  <P size="--size18" bold="700" mr="10px 0px 0px opx">
                    120 350
                  </P>
                </Card.Section>
              </Card.Flex>
            <Card.Flex width="55%" className = "rightData">
                <Card.Section>
                  <Card.Round className="round2" />
                </Card.Section>
                <Card.Section className = "line">
                  <Card.Flex>
                    <P size="--size12" bold="500" cl="--shade-5">
                    Jarayonda
                    </P>
                    <Card.Flex width="50%" bold="700">
                      <P size="--size12" bold="500" cl="--green" mr = " 0 0 0 7px">
                        10%
                      </P>
                    </Card.Flex>
                  </Card.Flex>
                  <P size="--size18" bold="700" mr="10px 0px 0px opx">
                    120 350
                  </P>
                </Card.Section>
              </Card.Flex>
            <Card.Flex width="55%" className = "rightData">
                <Card.Section>
                  <Card.Round className="round3" />
                </Card.Section>
                <Card.Section className = "line">
                  <Card.Flex>
                    <P size="--size12" bold="500" cl="--shade-5">
                    Ko’rib chiqilgan
                    </P>
                    <Card.Flex width="50%" bold="700">
                      <P size="--size12" bold="500" cl="--green" mr = " 0 0 0 7px">
                        75%
                      </P>
                    </Card.Flex>
                  </Card.Flex>
                  <P size="--size18" bold="700" mr="10px 0px 0px opx">
                    120 350
                  </P>
                </Card.Section>
              </Card.Flex>
            
            </Card.Section>
           
          </Card.Flex>
        </Card.Section>
      </Card>
    </Container>
  );
};

export default MurojaatlarCard;
