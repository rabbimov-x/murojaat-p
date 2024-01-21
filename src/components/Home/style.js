 import styled from "styled-components";

 const BigContainer = styled.div`
   width: 100%;
 `
 const HomeBody = styled.div`
   width: 100%;
   display: flex;
   padding-top: 24px;
   flex-wrap: wrap;
   .hududDenamikasiTable{
    @media (max-width: 1442px) {
        width: ${({max})=> max ? "50%" : "50%"};
    }
    @media (max-width: 1200px) {
        width: ${({max})=> max ? "50%" : "100%"};
    }
   }
 `


export { BigContainer, HomeBody};