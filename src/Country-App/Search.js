import React, { useEffect, useState } from "react";
import style from './home.module.css';

const Search = (props) => {
    const [searchText, setSearchText] = useState();

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        props.onSearch(searchText);
    },[searchText])

    return (
        <div className={style.search}>
            <label htmlFor="search">Search : </label>
            <input type="text" value={searchText} onChange={handleChange} name="search" id="search" />
        </div>
    )
}

export default Search;