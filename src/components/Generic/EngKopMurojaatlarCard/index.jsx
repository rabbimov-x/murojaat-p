import React from "react";
import { Card, Container } from "./style";
import { P } from "../../../globalStyled";
const EngKopMurojaatlarCard = () => {
  return (
    <Container>
      <Card>
        <Card.Section>
          <Card.Flex>
            <P size="--size24" bold="700">
              Hududlar kesimida eng ko’p murojaatlar
            </P>
          </Card.Flex>
        </Card.Section>
        <Card.Body>
          <Card.Viloyatlar>
            <Card.Flex>
              <Card.Round className="round1">
                <P  size="--size14" bold="700" cl = "--shade-1">
                  1932
                </P>
              </Card.Round>
              <P w = "80%" size="--size16" bold="700" mr = "0 0 0 10px">
              1832 ming murojaat surxondaryo viloyatidan
            </P>
            </Card.Flex>
          </Card.Viloyatlar>
          <Card.Viloyatlar>
            <Card.Flex>
              <Card.Round className="round1">
                <P  size="--size14" bold="700" cl = "--shade-1">
                  1932
                </P>
              </Card.Round>
              <P w = "80%" size="--size16" bold="700" mr = "0 0 0 10px">
              1832 ming murojaat surxondaryo viloyatidan
            </P>
            </Card.Flex>
          </Card.Viloyatlar>
          <Card.Viloyatlar>
            <Card.Flex>
              <Card.Round className="round1">
                <P  size="--size14" bold="700" cl = "--shade-1">
                  1932
                </P>
              </Card.Round>
              <P w = "80%" size="--size16" bold="700" mr = "0 0 0 10px">
              1832 ming murojaat surxondaryo viloyatidan
            </P>
            </Card.Flex>
          </Card.Viloyatlar>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EngKopMurojaatlarCard;
