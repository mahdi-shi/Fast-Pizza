import PropTypes from "prop-types";
import { formatCurrency } from "../../utilites/helpers";
import Button from "../../ui/Button";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="justify-between pb-3 pt-1 sm:flex sm:items-center">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold sm:mt-3">
          {formatCurrency(totalPrice)}
        </p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.node,
};

export default CartItem;
