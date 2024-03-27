import { formatCurrency } from "../../utilites/helpers";
import PropTypes from "prop-types";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xs font-medium italic">
        {isLoadingIngredients ? "Loading..." : ingredients}
      </p>
    </li>
  );
}

export default OrderItem;

OrderItem.propTypes = {
  item: PropTypes.node,
  isLoadingIngredients: PropTypes.node,
  ingredients: PropTypes.node,
};
