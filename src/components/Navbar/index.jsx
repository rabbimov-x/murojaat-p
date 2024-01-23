import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../globalStyled";
import { navbar } from "../../utils/navbar";
import { NavContainer, Section, Link, Logo, ButtonContainer,Icon } from "./style";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <NavContainer width = {`${open}`}>
      <ButtonContainer onClick={()=>{setOpen(!open)}}>
        {open ? <Icon.Menu></Icon.Menu> : <Icon.X></Icon.X>}
      </ButtonContainer>
      
      <Container  justify="space-between" align="true" display = {`${open}`} pd="0">
        <Section
          onClick={() => navigate("/")}
          cursor="true"
          border="true"
          pdl="false"
        >
          <Logo />
        </Section>
        <Section pdl>
          {navbar.map(({ path, id, title, icon, hiddin }) => {
            if (hiddin) {
              return "";
            } else {
              return (
                <Link to={path} key={id()}>
                  {icon}
                  {title}
                </Link>
              );
            }
          })}
        </Section>
      </Container>
    </NavContainer>
  );
};

export default Navbar;
