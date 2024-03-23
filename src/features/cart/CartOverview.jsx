import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-700 p-5 uppercase text-stone-50 sm:text-left">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
