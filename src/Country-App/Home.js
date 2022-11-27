import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import style from './home.module.css';

const URL = 'https://restcountries.com/v3.1/all';

const Home = () => {
    const [countries, setCountries] = useState();
    const [error, setError] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const getAllCountries = () => {
        fetch(URL)
        .then((res) => {
            if(!res.ok){
                throw Error('fetching is not successful')
            }else{
                return res.json();
            }
        })
        .then((data) => {
            setCountries(data);
            setFilteredCountries(data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getAllCountries()
    },[])

    // Remove country
    const handleRemoveCountry = (name) =>{
        const filter = filteredCountries.filter((country) => country.name.common !== name);
        setFilteredCountries(filter);
    }

    return (
        <div className={style.home}>
            <h1 className={style.heading}>Country App</h1>
            {isLoading && <h3 className={style.heading}>Data is loading...</h3>}
            {error && <h3 className={style.heading}>{error}</h3>}
            {countries && <Countries onRemoveCountry={handleRemoveCountry} countries={filteredCountries} />}
        </div>
    )
}

export default Home;