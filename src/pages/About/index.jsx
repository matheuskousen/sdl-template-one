import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import {Content} from "./style";
import Headline from "./Headline";
import Infos from "./Infos";


export default props => {


    return <>
    
    <Nav/>
    <Content>
        <Headline/>
        <Infos/>
    </Content>
   <Footer/>

    </>
}