
// DEPENDES
import React from "react";

// TYPES
interface TitleProductComponentProps {
  product: {
    title: string;
    price: number;
  };
}

const TitleProductComponent: React.FC<TitleProductComponentProps> = ({
  product,
}) => {
  return (
    <div className="product_card_div">
      <header className="product_card_header_add">
        <h4 className="product_card_title_h4">{product.title}</h4>
        <span>
          Precio <strong>${product.price} MXN.</strong>
        </span>
      </header>
    </div>
  );
};

export default TitleProductComponent;
