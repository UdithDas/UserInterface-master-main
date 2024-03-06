import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ onDataFetched }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('district'); // Default filter set to 'district'
  const navigate = useNavigate();

  const handleSearch = async () => {
    navigate(`/search/${searchTerm}/${filter}`);
    // try {
    //   const response = await axios.get(`http://localhost:3005/search/${searchTerm}/${filter}`);
    //   onDataFetched(response.data);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   // Handle error or set state to indicate an error
    // }
  };

  return (
    <div style={{marginLeft:'100px',marginTop:'10px',display:'flex',alignItems:'flex-start',justifyContent:'space-evenly'}}>
     
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="district">District</option>
        <option value="state">State</option>
        <option value="type">Type</option>
      </select> 
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
