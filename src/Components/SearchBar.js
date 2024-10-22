import React from 'react';

const SearchBar = () => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search for a component"
        className="w-full p-3 border-2 border-b-slate-200 rounded-md "
      />
    </div>
  );
};

export default SearchBar;
