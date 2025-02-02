interface ButtonProductComponentProps {
  Icon: React.ElementType;
  text: string;
}

const ButtonProductComponent: React.FC<ButtonProductComponentProps> = ({
  Icon,
  text,
}) => {
  return (
    <button className="product_card_buttons_add_cart">
      <Icon className="product_card_buttons" />
      {text}
    </button>
  );
};

export default ButtonProductComponent;
