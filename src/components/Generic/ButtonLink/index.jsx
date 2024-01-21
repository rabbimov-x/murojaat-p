import React from "react";
import useUniqueId from "../../../hooks/useUniqueId";
import { Container } from "../../../globalStyled";
import { NavContainer, Section, Link } from "./style";
const ButtonLink = ({btn1, link}) => {
    const id = useUniqueId()
  return (
    <NavContainer>
      <Container justify="space-between" align="true" pd="0">
        <Section pdl>
                <Link
                  to={ link ? link :"/"}
                  key={id}
                >
                  {btn1}
                    </Link>
            
        </Section>
        
      </Container>
    </NavContainer>
  );
};

export default ButtonLink;
