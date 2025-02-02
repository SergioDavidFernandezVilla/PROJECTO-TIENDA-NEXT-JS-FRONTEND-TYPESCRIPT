"use client";

// DEPENDES
import styled from "styled-components";

// COMPONENTS
import SearchFormHeroComponent from "../SearchFormHeader/SearchFormHeroComponent";
import LogoHeroComponent from "../LogoHeader/LogoHeroComponent";

const NavHeroComponentStyled = styled.nav`
  height: 60px;
  padding: 0px 20px 0px 20px;
  border-bottom: 1px solid #e5e5e5;
`;

const UlHeroComponentStyled = styled.ul`
  display: flex;
  gap: 40px;
  justify-content: start;
  align-items: center;
  height: 100%;
`;

const HeroComponent = () => {
  return (
    <NavHeroComponentStyled>
      <UlHeroComponentStyled>
        <LogoHeroComponent />

        <SearchFormHeroComponent />
      </UlHeroComponentStyled>
    </NavHeroComponentStyled>
  );
};

export default HeroComponent;
