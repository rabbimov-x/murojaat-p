import React from "react";
import { Container, DateInput, MainTitle, PageTitle, Section, Icon } from "./style";
const Title = ({ pageTitle, mainTitle }) => {
  return (
    <Container>
      <Section>
        <PageTitle>
          <p>{pageTitle ? pageTitle : ""}</p>
        </PageTitle>
        <MainTitle>
          <p>{mainTitle ? mainTitle : ""}</p>
        </MainTitle>
      </Section>
      <Section>
        <Container.Flex>
           <Icon>
            <Icon.Sun></Icon.Sun>
           </Icon>
           <DateInput type="date"/>
        </Container.Flex>
      </Section>
    </Container>
  );
};

export default Title;
