import React from "react";
import Title from "../Generic/Title";
import { Col6, Container } from "../../globalStyled";
import { BigContainer, BodyLeft, HomeBody } from "./style";
import {
  ButtonLink,
  HududKartasiCard,
  SohalarCard,
} from "../Generic";

const HududlarkesimidaViloyat = () => {
  return (
    <BigContainer>
      <Container>
        <Title
          mainTitle="Hududlar kesimida"
          pageTitle="Pages / Hududlar kesimida tuman"
        />
        <ButtonLink btn1 = "top masalalar" link = "hudud_kesimida/top_masalalar"/>
        <HomeBody>
          
          <Col6 className = "hududDenamikasiTable">
            <HududKartasiCard />
          </Col6>
          <BodyLeft>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
            <Col6>
            <SohalarCard/>
            </Col6>
          </BodyLeft>
        </HomeBody>
      </Container>
    </BigContainer>
  );
};

export default HududlarkesimidaViloyat;
