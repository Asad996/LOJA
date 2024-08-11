import React from 'react';
import { useDispatch } from "react-redux";
import { setSearchTerm } from '../../features/CartSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value)); // Dispatch the search term to the store
    };

    return (
        <input
            type="text"
            placeholder="Search clothes..."
            className="border p-2 rounded-md w-full outline-[rgb(182,142,116)] "
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
