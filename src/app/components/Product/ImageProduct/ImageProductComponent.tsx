"use client";

import { MdFavorite, MdShare, MdBrokenImage } from "react-icons/md";
import Image from "next/image";
import { styled } from "styled-components";

// TYPES
interface ImageProductComponentProps {
  product: {
    image?: string;
    title: string;
  };
}

const FigureImageProductComponentStyled = styled.figure`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  aspect-ratio: 5 / 4;
`;

const ImageProductComponentStyled = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0px 0px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    object-position: center;
    transform: scale(1.2);
  }
`;

const ErrorImageProductComponentStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a1a1a1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
  aspect-ratio: 5 / 4;

  .icon_image_not_found {
    width: 40px;
    height: 40px;
  }

  span {
    font-size: 18px;
  }
`;



const ImageProductComponent: React.FC<ImageProductComponentProps> = ({
  product,
}) => {
  return (
    <FigureImageProductComponentStyled>
      {product.image ? (
        <ImageProductComponentStyled
        src={product.image}
        alt={product.title}
       
      />
      ) : (
        <ErrorImageProductComponentStyled>
          <MdBrokenImage className="icon_image_not_found" />
          <p>
            <span>Image not found</span>
          </p>
        </ErrorImageProductComponentStyled>
      )}
      <div className="product_card_figure_container_icons">
        <div className="product_card_figure_container_icons_div">
          <MdFavorite className="product_card_figure_container_icons_div_icon" />
          <MdShare className="product_card_figure_container_icons_div_icon" />
        </div>
      </div>
    </FigureImageProductComponentStyled>
  );
};

export default ImageProductComponent;
