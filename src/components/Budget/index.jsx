import React   from "react";
import Title from "../Generic/Title";
import { Container } from "../../globalStyled";
import { BigContainer, HomeBody } from "./style";
import { ButtonLink } from "../Generic";
import BigBudgetTable from "../Generic/BigBudgetTable";

const Budget = () => {
  return (
    <BigContainer>
      <Container>
        <Title
          mainTitle="Hududlar kesimida"
          pageTitle="Pages / Hududlar kesimida tuman"
        />
        <ButtonLink btn1="top masalalar" link="/" />
        <HomeBody>
          <BigBudgetTable />
        </HomeBody>
      </Container>
    </BigContainer>
  );
};

export default Budget;
