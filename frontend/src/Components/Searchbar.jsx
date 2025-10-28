import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    const value = query.trim();
    if (!value) return;
    if (typeof onSearch === "function") onSearch(value);
  };
  return (
    <div className="relative w-full max-w-sm">
    <form onSubmit={handleSubmit} className="flex">
        <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search VibePost"
        className="pl-10 p-2 border border-gray-300 rounded-3xl w-full h-8 "
      />
    </form>
    </div>
  );
};
