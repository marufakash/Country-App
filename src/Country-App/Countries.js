import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Country from "./Country";

const Countries = (props) => {
    // console.log(props.countries[0])

    return (
        <div>
            {props.countries.map((country) => <Country key={uuidv4()} onRemoveCountry={props.onRemoveCountry} country={country} />)}
        </div>
    )
}

export default Countries;