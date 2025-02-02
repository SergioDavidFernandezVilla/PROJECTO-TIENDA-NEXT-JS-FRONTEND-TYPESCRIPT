"use client";

// DEPENDES
import Link from "next/link";
import styled from "styled-components";

// COMPONENTS
import { CustomLiComponent } from "../CustomLi/CustomLiComponent";

const LinkComponentStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

const LogoHeroComponent = () => {
  return (
    <CustomLiComponent>
      <LinkComponentStyled href="">
        <span>FakeTienda</span>
      </LinkComponentStyled>
    </CustomLiComponent>
  );
};

export default LogoHeroComponent;
