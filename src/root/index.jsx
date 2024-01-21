import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { BrowserContainer, NotFound} from "./style";

const Root =()=>{
    return(
        <BrowserRouter>
            <BrowserContainer>
            <Navbar/>
            <Routes>    
                {
                    navbar.map((value)=>{
                        console.log="kkmfslmfls"
                        return(
                            <Route key = {value.id()} path = {value.path} element = {value.element} 
                            />
                            )
                        })
                }
                <Route path = "/" element = {<Navigate to = "/umumiy_statistika"/>} />    
                <Route path = "/*" element = {<NotFound>404 Not Found</NotFound>} />
            </Routes>
        </BrowserContainer>
        </BrowserRouter>
    )
}
export default Root; 