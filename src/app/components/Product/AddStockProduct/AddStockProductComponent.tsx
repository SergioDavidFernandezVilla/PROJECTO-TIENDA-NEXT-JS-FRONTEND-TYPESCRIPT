"use client";

// DEPENDES
import { useState } from "react";

// ICONS
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const AddStockProductComponent = () => {
  const [numberStock, setNumberStock] = useState(1);

  const AddNumberStock = () => {
    setNumberStock(numberStock + 1);
  };

  const RemoveNumberStock = () => {
    if (numberStock > 1) {
      setNumberStock(numberStock - 1);
    }
  };

  return (
    <div className="product_card_add_div">
      <button
        className="product_card_add_button_right"
        onClick={RemoveNumberStock}
      >
        <MdChevronLeft className="product_card_add_button_icon" />
      </button>

      <input
        type="number"
        className="product_card_add_input"
        min="0"
        value={numberStock}
        readOnly
      />

      <button className="product_card_add_button_left" onClick={AddNumberStock}>
        <MdChevronRight className="product_card_add_button_icon" />
      </button>
    </div>
  );
};

export default AddStockProductComponent;
