import styled from "styled-components";
import {ReactComponent as sun} from "../../../assets/icons/Sun.svg" 
import  calendar from "../../../assets/images/calendar_today.png"
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
Container.Flex = styled.div`
width: fit-content;
display: flex;
align-items: center;
justify-content: end;
`
const Section = styled.div`
display: block;
`
const PageTitle = styled.div`
font-family: var(--family);
font-size: var(--size16);
font-weight: 500;
color: var(--violet2);
line-height: calc( var(--size16) + 8px);
border: none;
`
const MainTitle = styled.div`
font-family: var(--family);
font-size: var(--size34);
font-weight: 700;
color: var(--shade-6);
line-height: calc( var(--size34) + 8px);
`
const DateInput = styled.input`
    border: none;
    position: relative;
    margin-left: 12px;
    background-color: var(--shade-1);
    color: var(--shadde-5);
    padding: var(--date);
    font-size: var(--size14);
    font-family: var(--family);
    font-weight: 500;
    line-height: 120%;
    border-radius: 7px;
    &::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(${calendar}) no-repeat;
    background-size: var(--icon-w18) var(--icon-w18) ;
    background-position: left 5% top 10%;
    border-width: thin;
    position: absolute;
    left: 10%;
    top: 57%;
    transform: translateY(-65%);
    display: flex;
    align-items: center;
    @media (max-width: 1200px) {
      top: 57%;
    }
    @media (max-width: 757px) {
      top: 55%;
    }
    @media (max-width: 576px) {
      top: 55%;
    }
    }
    &::-webkit-datetime-edit-fields-wrapper {
    position: relative;
    left: 26%;
    color: #A3AED0;
    }
`
const Icon = styled.div`
width: fit-content;
height: fit-content;
padding: var(--btn-smole);
border-radius: 7px;
background-color: var(--shade-1);
display: flex;
align-items: center;
`
Icon.Sun = styled(sun)`
width: var(--icon-w25);
height: var(--icon-w25);
`

export { Container, PageTitle, MainTitle, Section, DateInput, Icon  };

