import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
console.log(searchTerm)

  return (
    <div className="">
      <input
        type="text"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for a component"
        className="w-full p-3 border-2 border-b-slate-200 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
