import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="py-6 text-center text-base sm:text-lg">
      <h1 className="text-center text-xl px-1 font-bold font-semibold text-stone-600 sm:text-2xl">
        The best pizza.
        <br />
        <span className="text-yellow-500 sm:text-3xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
