
import React from "react"
import { ListLinks } from "./style"


export default props => {

return <ListLinks  isOpen={props.isOpen} >

   {props.children}    
       

</ListLinks>


}