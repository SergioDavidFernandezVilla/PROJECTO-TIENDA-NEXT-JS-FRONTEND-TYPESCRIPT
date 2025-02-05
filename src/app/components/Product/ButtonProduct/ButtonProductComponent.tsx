"use client";

// DEPENDES
import { styled } from "styled-components";

// ICONS
import { MdShoppingBag, MdShoppingCart } from "react-icons/md";

//TYPES
interface ButtonProductComponentProps {
  iconName: "MdShoppingBag" | "MdShoppingCart";
  text: string;
}

const iconMap = {
  MdShoppingBag,
  MdShoppingCart,
};

// Estilos condicionales en styled-components
const ButtonProductComponentStyled = styled.button<{ $iconName: string }>`
  width: 100%;
  padding: 8px 12px;
  border-radius: 60px;
  border: ${({ $iconName }) =>
    $iconName === "MdShoppingBag" ? "none" : "1px solid #e5e5e5"	};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: 0.3s ease-in;

  background: ${({ $iconName }) =>
    $iconName === "MdShoppingCart" ? "none" : "#e7d621"};

  &:hover {
    background: ${({ $iconName }) =>
      $iconName === "MdShoppingBag" ? "#dac80b" : "#ededed"};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ButtonProductComponent: React.FC<ButtonProductComponentProps> = ({
  iconName,
  text,
}) => {
  const Icon = iconMap[iconName];

  return (
    <ButtonProductComponentStyled $iconName={iconName}>
      <Icon />
      <span>{text}</span>
    </ButtonProductComponentStyled>
  );
};

export default ButtonProductComponent;
