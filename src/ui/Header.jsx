import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex justify-between bg-yellow-400 p-5 uppercase">
      <Link to="/" className="tracking-[10px]">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <h2 className="hidden sm:block">Tailus</h2>
    </header>
  );
}

export default Header;
