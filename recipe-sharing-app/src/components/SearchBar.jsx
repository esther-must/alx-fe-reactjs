import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const [filter, setFilter] = useState('');

  return (
    <div>
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">Filter by Cooking Time</option>
            <option value="short">Less than 30 mins</option>
            <option value="medium">30-60 mins</option>
            <option value="long">More than 1 hour</option>
        </select>
    </div>
  );
};

export default SearchBar;