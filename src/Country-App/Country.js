import React from "react";
import style from './home.module.css';

const Country = (props) => {
    const {name, flags, area, population, capital} = props.country;

    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    }

    return (
        <div className={style.country}>
            <img src={flags.png} alt="name.common" />
            <h3>Name : {name.common}</h3>
            <h3>Population : {population}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Area : {area}</h3>
            <button>Add</button>
            <button onClick={() => {handleRemoveCountry(name.common)}}>Remove</button>
        </div>
    )
}

export default Country;