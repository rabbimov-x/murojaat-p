import styled ,{ createGlobalStyle , css } from "styled-components";




const  allCommon = css`
width: ${({w})=>w? w : `100%`};
height: ${({h})=>h? h :`auto`}; 
position: ${({position})=>position? position : `relative`};
display: ${({display})=>display ? "none" : "block"};
flex-direction: ${({flex})=> flex? flex : "none"}; 
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left" }; 
align-items: ${({align})=>align? align: "" };
text-align: ${({textC})=>textC? textC : "left"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
color: ${({cl})=>cl? `var(${cl})` : "var(--cl-white)"}; 
`
export const font = css`
font-family: var(--family);
font-size: ${({size})=> size ? `var(${size})` : "var(--size14)"};
font-weight: ${({bold})=> bold ? bold : "400"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display ? display : "block"};
line-height: 140% ;
`

export const  GlobalStyle = createGlobalStyle`
  
  body{
      width: 100%;
      overflow-x: hidden;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      background-color: red;
  }
  *{
      box-sizing: border-box;
  }
`
export const H1 = styled.h1`
${font}
color : ${({cl})=>cl ? `var(${cl})` : "var(--shade-6)"};
text-transform: uppercase;
text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
`


export const P = styled.p`
${font}
width: ${({w})=> w ? w : "" };
line-height: 140%;
font-style: normal;
order: 0;
color : ${({cl})=>cl ? `var(${cl})` : "var(--shade-6)"};
/* text-shadow: ${({tSh})=> tSh ? "-1.39839px 2.09758px 0.699193px rgba(0, 0, 0, 0.1)" : "-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1)"}; */
/* filter: ${({fSh})=> fSh ? "drop-shadow(-4.51px 2.26px 0.75px rgba(0, 0, 0, 0.15))" : "none"}; */
`

export const Container = styled.div`
width: 100%;
display: ${({display})=>display ? display : "flex"};
flex-direction: ${({flex})=> flex? "column" : "none"};
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left"};
align-items: ${({align})=>align? "center": "" };
padding: ${({pd})=>pd? pd : "22px 20px "};
background-color: ${({bg})=>bg? `var(${bg})` : ""};
box-sizing: border-box;
@media (max-width: 650px){
display: ${({display})=>display ? "none" : "flex"};  
}
`
export const Col12 = styled.div`    

      ${allCommon}
      width: 100%;
      padding: ${({pd})=>pd? pd : "10px"} ;
      height: auto;
`
export const Col10 = styled(Col12)`
    width: 83.333%;
`
export const Col8 = styled(Col12)`
    width: 66.666%;
    @media (max-width: 1200px) {
        width: 100%;
    }
`
export const Col6 = styled(Col12)`
    width: 50%;
    @media (max-width: 1200px) {
        width: ${({min})=> min ? "50%" : "100%"};
    }
    
`
export const Col4 = styled(Col12)`
    width: 33.333%;
    @media (max-width: 1440px) {
        width: 50%;
    }
    @media (max-width: 1200px) {
        width: ${({max})=> max ? "50%" : "100%"};
    }
    @media (max-width: 576px) { 
        width:  ${({max})=> max ? "100%" : "100%"}; 
        margin: 0 auto;
        padding: 0 auto;
    }
`
export const Col3  = styled(Col12)`
    width: 25%;
    @media (max-width: 1440px) {
        width: 50%;
    }
    @media (max-width: 999px) {
        width: ${({max})=> max ? "50%" : "100%"};
    }
    @media (max-width: 757px) {
        width: 100%;
    }
    @media (max-width: 576px) {
        width: 100%;
        margin: 0 auto;
        padding : 0 auto ;
    }
    
`
export const Col2  = styled(Col12)`
width: 16.6%;
@media (max-width: 992px) {
    width: 25%;
}
@media (max-width: 757px) {
    width: 33.333%;
}
@media (max-width: 576px) {
    width: 50%;
    margin: 0 auto;
    padding : 0 auto ;
}
`

