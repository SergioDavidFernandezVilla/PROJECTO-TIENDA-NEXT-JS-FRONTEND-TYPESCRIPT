// ICONS
import { MdFavorite, MdShare } from "react-icons/md";

// TYPES
interface ImageProductComponentProps {
  product: {
    image: string;
  };
}

const ImageProductComponent: React.FC<ImageProductComponentProps> = ({
  product,
}) => {
  return (
    <figure className="product_card_figure">
      <img className="product_card_img" src={product.image} alt="xd" />
      <div className="product_card_figure_container_icons">
        <div className="product_card_figure_container_icons_div">
          <MdFavorite className="product_card_figure_container_icons_div_icon" />
          <MdShare className="product_card_figure_container_icons_div_icon" />
        </div>
      </div>
    </figure>
  );
};

export default ImageProductComponent;
