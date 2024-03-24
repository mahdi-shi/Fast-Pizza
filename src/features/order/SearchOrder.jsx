import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #"
        className="focus:ring-Yellow duration-400 w-36 rounded-full bg-yellow-100 px-3 py-1 text-sm transition-all focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 md:w-80 md:focus:w-96"
      />
    </form>
  );
}

export default SearchOrder;
