import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  console.log(searchTerm);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setSearchTerm(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a component"
        className="w-full p-3 border-2 border-b-slate-200 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
