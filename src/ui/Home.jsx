import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="py-6 text-center text-base sm:text-lg">
      <h1 className="px-1 text-center text-xl font-bold font-semibold text-stone-600 sm:text-2xl">
        The best pizza.
        <br />
        <span className="text-yellow-500 sm:text-3xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <div className="mt-10">
        {!username ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continuing Order, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
