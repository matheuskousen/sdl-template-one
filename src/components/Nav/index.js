import React, { useState } from "react";
import { Container } from "./style";

import BtnToggle from "./BtnToggle";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";
import Data from "./data";
import Links from "./Links";

function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptions] = useState(Data);

  const showMenu = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Logo className={props.className} />
      <BtnToggle className={props.className} onClick={showMenu} />
      <MenuLinks isOpen={isOpen}>
        {isOptions.map((option, i) => (
          <Links
            isMovingtoRight={isOpen}
            isOpacity={isOpen}
            delay={i * 1000}
            key={option.id}
            to={option.targetPage}
            title={option.optionName}
          />
        ))}
      </MenuLinks>
    </Container>
  );
}

export default Nav;
