import React from "react";
import Title from "../Generic/Title";
import { Col3, Container } from "../../globalStyled";
import { BigContainer, HomeBody } from "./style";
import {
    SohalarCard
} from "../Generic";

const SohalarKesimida = () => {
  return (
    <BigContainer>
      <Container>
        <Title
          mainTitle="Sohalar kesimida"
          pageTitle="Pages / Sohalar kesimida"
        />
        <HomeBody>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
          <Col3 >
            <SohalarCard />
          </Col3>
        </HomeBody>
      </Container>
    </BigContainer>
  );
};

export default SohalarKesimida;
