import React from "react";
import Title from "../Generic/Title";
import { Col6, Container } from "../../globalStyled";
import { BigContainer, HomeBody } from "./style";
import {
  HududKartasiCard,
  HududDenamikasiTable,
  ButtonLink,
} from "../Generic";

const Hududlarkesimida = () => {
  return (
    <BigContainer>
      <Container>
        <Title
          mainTitle="Hududlar kesimida"
          pageTitle="Pages / Hududlar kesimida"
        />
        <ButtonLink btn1 = "Yunusobod" link = "yunusobod"/>
        <HomeBody>
          <Col6 className = "hududDenamikasiTable">
            <HududKartasiCard  />
          </Col6>
          <Col6 className = "hududDenamikasiTable">
            <HududDenamikasiTable link = "/hudud_kesimida/yunusobod" />
          </Col6>
        </HomeBody>
      </Container>
    </BigContainer>
  );
};

export default Hududlarkesimida;
