import React from "react";
import Title from "../Generic/Title";
import { Col6, Col3, Container, Col4 } from "../../globalStyled";
import { BigContainer, HomeBody } from "./style";
import {
  MurojaatlarCard,
  EngKopMurojaatlarCard,
  MurojaatMasalasiCard,
  TashkilotlarDenamikasiTable,
  HududDenamikasiTable,
} from "../Generic";

const Home = () => {
  return (
    <BigContainer>
      <Container>
        <Title
          mainTitle="Asosiy Dashboard"
          pageTitle="Pages / Umumiy statistika"
        />
        <HomeBody>
          <Col3>
            <MurojaatlarCard />
          </Col3>
          <Col3>
            <EngKopMurojaatlarCard />
          </Col3>
          <Col6>
            <MurojaatMasalasiCard />
          </Col6>
          <Col4 className = "hududDenamikasiTable">
            <HududDenamikasiTable />
          </Col4>
          <Col4>
            <TashkilotlarDenamikasiTable />
          </Col4>
          <Col4>
            <TashkilotlarDenamikasiTable />
          </Col4>
        </HomeBody>
      </Container>
    </BigContainer>
  );
};

export default Home;
