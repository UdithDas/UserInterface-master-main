import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onDataFetched }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint for searching
      const response = await axios.get(`http://localhost:3005/search=${searchTerm}`);
      onDataFetched(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error or set state to indicate an error
    }
  };

  return (
    <div style={{marginLeft:'100px',marginTop:'10px',display:'flex',alignItems:'flex-start',justifyContent:'space-evenly'}}>
      <input
        type="text"
        placeholder="Enter search Place"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
