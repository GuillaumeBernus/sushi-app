import React from "react";
import { string } from "prop-types";

import sushiLogo from "./logo_sushi.png";
import { Logo } from "./styles";
import { Title } from "./styles";
import { Wrapper } from "./styles";
import { Badge } from "./styles";
const webSiteTitle = "Les Sushi de Guigui";

export default function Header({ title }) {
  return (
    <Wrapper>
      <Logo src={sushiLogo} alt={title} />
      <Title>
        {webSiteTitle} - {title}
      </Title>
      <Badge>3</Badge>
    </Wrapper>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
