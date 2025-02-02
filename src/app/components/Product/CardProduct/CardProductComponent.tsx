// DEPENDES
import Link from "next/link"; // Importar Link de Next.js

// ICONS
import {
  MdChevronLeft,
  MdChevronRight,
  MdFavorite,
  MdShare,
  MdShoppingCart,
  MdShoppingBag,
} from "react-icons/md";

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

// COMPONENTS
import ButtonProductComponent from "../ButtonProduct/ButtonProductComponent";
import ImageProductComponent from "../ImageProduct/ImageProductComponent";
import HeaderTextProductComponent from "../HeaderTextProduct/HeaderTextProductComponent";
import AddStockProductComponent from "../AddStockProduct/AddStockProductComponent";

const CardProductComponent: React.FC<CardProductComponentProps> = ({
  product,
}) => {
  return (
    <article className="product_card_article">
      {/* Enlace que envuelve todo menos los botones */}
      <Link href="/producto/123" className="product_card_link" tabIndex={-1}>
        <header className="product_card_header">
          <ImageProductComponent product={product} />

          <HeaderTextProductComponent product={product} />
        </header>
      </Link>

      {/* Botones de interacción que deben funcionar sin afectar el enlace */}
      <div className="product_card_div_inferior">
        <AddStockProductComponent />

        <div className="product_card_buttons">
          <ButtonProductComponent Icon={MdShoppingBag} text={"Comprar ahora"} />

          <ButtonProductComponent
            Icon={MdShoppingCart}
            text={"Guardar en el carrito"}
          />
        </div>
      </div>
    </article>
  );
};

export default CardProductComponent;
