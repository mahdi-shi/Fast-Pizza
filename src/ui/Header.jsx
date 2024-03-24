import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";

function Header() {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="flex justify-between bg-yellow-400 p-5 uppercase">
      <Link to="/" className="tracking-[10px]">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      {username && <Username />}
    </header>
  );
}

export default Header;
