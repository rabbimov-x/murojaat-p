import styled, { css } from "styled-components";
import img1 from "../../assets/images/Naqsh1.png";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as door } from "../../assets/icons/Door.svg";
import { ReactComponent as mapPinLine } from "../../assets/icons/MapPinLine.svg";
import { ReactComponent as squaresFour } from "../../assets/icons/SquaresFour.svg";
import { ReactComponent as suitcase } from "../../assets/icons/Suitcase.svg";
import { ReactComponent as menu } from "../../assets/icons/menu.svg";
import { ReactComponent as x } from "../../assets/icons/x.svg";

import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  width: 20%;
  height: 700px;
  min-height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  align-items: center;
  padding-top: 12px;
  overflow: hidden;
  background: url(${img1}), #ffffffcf;
  background-size: 98%;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: bottom 0 left 0;

  .open{
    display: ${({open})=>open ? "none" : "flex"} !important;
  }
  @media (max-width: 650px) {
  width: ${({width})=> width ? "auto" : "70%"};
  height: ${({width})=> width ? "auto" : "700px"};
  min-height: ${({width})=> width ? "auto" : "100%"};
  background-color: ${({width})=> width ? "transparent" : "#fff"};
  background-image: none;
    }
`;
const Section = styled.div`
  width: 100%;
  height: fit-content;
  display: block;
  gap: 20px;
  border-bottom: ${({ border }) => (border ? "1px solid #F4F7FE" : "")};
  .active {
    color: var(--shade-6);
    & path {
      stroke: ${({ className }) =>
        className ? `var(--grey)` : "var(--primary2)"};
    }
  }

  cursor: ${({ cursor }) => (cursor ? "pointer" : "")};
`;

const Link = styled(NavLink)`
  text-decoration: none;
  display: block;
  position: relative;
  font-family: var(--family);
  font-size: var(--size18);
  font-weight: 700;
  color: var(--grey);
  padding: 11.5px 12px 12px 45px;
  gap: 12px;
  &.active {
    background-color: var(--shade-3);
    ::after {
      content: "";
      display: ${(isActive) => (isActive ? `${isActive.value}` : "bo'lmadi")};
      width: 4px;
      height: 100%;
      background: var(--primary2);
      position: absolute;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      top: 0px;
      right: 0px;
    }
  }
`;
const Logo = styled(logo)`
  width: calc(30px + 38%);
  margin-left: 15px;
`;
const Icon = styled.div``;
const img = css`
  width: var(--icon-w25);
  width: var(--icon-w25);
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translate(-50%, -50%);
`;
Icon.Door = styled(door)`
  ${img}
`;
Icon.SquaresFour = styled(squaresFour)`
  ${img}
`;
Icon.Suitcase = styled(suitcase)`
  ${img}
`;
Icon.MapPinLine = styled(mapPinLine)`
  ${img}
`;
Icon.Menu = styled(menu)`
  width: var(--icon-w25);
  height: var(--icon-w25);
  & path{
    fill: var(--primary);
  }
`;
Icon.X = styled(x)`
  width: var(--icon-w25);
  height: var(--icon-w25);
  & path{
    fill: var(--primary);
  }
`;
const ButtonContainer = styled.button`
  width: auto;
  padding: var(--btn-smole);
  background-color: ${({btn})=> btn ? "#E6F3FA" : "#fff"};
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 10px;
  border-radius: 8px;
  font-family: var(--family);
  &:active {
    transform: scale(0.985);
    border-radius: 8px;
  }
  @media (max-width: 650px){
      display: flex;
  }
`;

export { Section, Logo, Link, Icon, ButtonContainer };
