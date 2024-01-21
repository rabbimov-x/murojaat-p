import styled from "styled-components";


import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 12px;
`;
const Section = styled.div`

  display: flex;
  align-items: center;
  gap: 20px;
  .active {
    color: var(--shade-6);
  }

  cursor: ${({ cursor }) => (cursor ? "pointer" : "")};
`;

const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--family);
  font-size: var(--size18);
  font-weight: 700;
  padding: var(--btn-middle);
  gap: 12px;
    background-color: var(--primary2);
    border-radius: 8px;
    color: #fff;
  

`;
export { Section, Link, };
