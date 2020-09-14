import React from 'react';
import './CountryDetailsShow.css';

const CountryDetailsShow = (props) => {
    const { name, population, region, nativeName, area, borders, capital, flag} = props.country;
    console.log(props)
    return (
        <div className="countryDetailsShow">
            <div className="countryDetails__image">
                <img src={flag} alt=""/>
            </div>
            <h3>Country name: {name}</h3>
            <p>Population: <strong>{population}</strong></p>
            <p>Region: {region}</p>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default CountryDetailsShow;