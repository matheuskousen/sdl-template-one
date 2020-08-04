import React from "react"
import { Li } from "./style"

export default  props =>{

    return <Li isOpacity={props.isOpacity}  delay={props.delay}  isMovingtoRight={props.isMovingtoRight}>
    <a href={props.to}>{props.title}</a>
  </Li>

}