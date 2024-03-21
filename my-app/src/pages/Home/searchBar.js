import React, { useState } from 'react';

const SearchBar = ({ data = [] }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Check if data is an array before using the filter function
  const filteredData = Array.isArray(data)
    ? data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
