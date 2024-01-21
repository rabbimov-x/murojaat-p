import React from "react";
import Title from "../Generic/Title";
import {  Container } from "../../globalStyled";
import { BigContainer,  HomeBody } from "./style";
import {
    BigTable,
  ButtonLink,
  
} from "../Generic";

const TopMasalalar = () => {
  return (
    <BigContainer>
      <Container>
        <Title
          mainTitle="Hududlar kesimida"
          pageTitle="Pages / Hududlar kesimida tuman"
        />
        <ButtonLink btn1 = "top masalalar" link = "top_masalalar"/>
        <HomeBody>
          <BigTable/>
        </HomeBody>
      </Container>
    </BigContainer>
  );
};

export default TopMasalalar;
