import React from "react";
import Title from "../Generic/Title";
import { Col12, Container } from "../../globalStyled";
import { BigContainer, HomeBody } from "./style";
import {
     TashkilotlarCard
} from "../Generic";

const Tashkilotlarkesimida = () => {
  return (
    <BigContainer>
      <Container>
        <Title
          mainTitle="Tashkilotlar kesimida"
          pageTitle="Pages / Tashkilotlar kesimida"
        />
        <HomeBody>
          <Col12 >
            <TashkilotlarCard/>
          </Col12>
          
        </HomeBody>
      </Container>
    </BigContainer>
  );
};

export default Tashkilotlarkesimida;
