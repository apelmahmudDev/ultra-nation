import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetailsShow from '../CountryDetailsShow/CountryDetailsShow';

const CountryDetails = () => {
    const [country, setCountry] = useState([]);

    const { countryName } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[])

    return (
        <div>
            {
                country.map(country => <CountryDetailsShow 
                    country={country}
                    key={country.alpha3Code}
                    ></CountryDetailsShow>)
            }
        </div>
    );
};

export default CountryDetails;