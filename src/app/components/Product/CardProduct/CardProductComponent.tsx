"use client"

// DEPENDES
import Link from "next/link";

// COMPONENTS
import ButtonProductComponent from "../ButtonProduct/ButtonProductComponent";
import ImageProductComponent from "../ImageProduct/ImageProductComponent";
import HeaderTextProductComponent from "../HeaderTextProduct/HeaderTextProductComponent";
import AddStockProductComponent from "../AddStockProduct/AddStockProductComponent";
import { styled } from "styled-components";


// TYPES
interface CardProductComponentProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  };
}

const ArticleCardProductComponentStyled = styled.article`
width: 380px;
height: fit-content;
border: 1px solid #e5e5e5;
border-radius: 4px;
overflow: hidden;
box-shadow: 2px 2px 10px #e9e9e9;
`

const LinkCardProductComponentStyled = styled(Link)`
display: block;
text-decoration: none;
color: inherit;
`;

const HeaderCardProductComponentStyled = styled.header`
width: 100%;
`;



const CardProductComponent: React.FC<CardProductComponentProps> = ({
  product,
}) => {
  return (
    <ArticleCardProductComponentStyled>
      <LinkCardProductComponentStyled href={`/producto/${product.id}`} tabIndex={-1}>
        <HeaderCardProductComponentStyled >
          <ImageProductComponent product={product} />
          <HeaderTextProductComponent product={product} />
        </HeaderCardProductComponentStyled>
      </LinkCardProductComponentStyled>

      <div className="product_card_div_inferior">
        <AddStockProductComponent />

        <div className="product_card_buttons">
          {/* Pasamos solo el nombre del icono */}
          <ButtonProductComponent iconName="MdShoppingBag" text="Comprar ahora" />
          <ButtonProductComponent iconName="MdShoppingCart" text="Guardar en el carrito" />
        </div>
      </div>
    </ArticleCardProductComponentStyled>
  );
};

export default CardProductComponent;
