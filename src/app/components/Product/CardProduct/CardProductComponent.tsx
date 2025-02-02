import {
  MdChevronLeft,
  MdChevronRight,
  MdFavorite,
  MdShare,
} from "react-icons/md";

const CardProductComponent = () => {
  return (
    <article className="product_card_article">
      <header className="product_card_header">
        <figure className="product_card_figure">
          <img
            className="product_card_img"
            src="https://cdn.pixabay.com/photo/2015/02/25/12/08/locomotive-648671_960_720.jpg"
            alt="xd"
          />

          <div className="product_card_figure_container_icons">
            <div className="product_card_figure_container_icons_div">
              <MdFavorite className="product_card_figure_container_icons_div_icon" />
              <MdShare className="product_card_figure_container_icons_div_icon" />
            </div>
          </div>
        </figure>

        <div className="product_card_div">
          <header className="product_card_header_add">
            <h4 className="product_card_title_h4">Titulo del god</h4>

            <div className="product_card_add_div">
              <a className="product_card_add_button_right">
                <MdChevronLeft className="product_card_add_button_icon" />
              </a>

              <input
                type="number"
                name=""
                id=""
                className="product_card_add_input"
                min="0"
                placeholder="1"
              />

              <a className="product_card_add_button_left">
                <MdChevronRight className="product_card_add_button_icon" />
              </a>
            </div>
          </header>
          <span>
            Precio
            <strong>$402 MXN.</strong>
          </span>
        </div>
      </header>
    </article>
  );
};

export default CardProductComponent;
