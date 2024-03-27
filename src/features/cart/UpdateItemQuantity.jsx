import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import {
  decreaseQuantity,
  increaseQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <p className="mt-4 font-medium">{currentQuantity}</p>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.node,
  currentQuantity: PropTypes.node,
};
