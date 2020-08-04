import React from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import PortfolioContent  from "./PortfolioContent/index"

import Headline from "./Headline"
import Photos from "./Photos"



export default  props => {

return <> 
 <Nav/>
 
 <PortfolioContent >  
     <Headline isvaluescroll={1} />
     <Photos  />
 </PortfolioContent>

 <Footer/>
      
</>
}