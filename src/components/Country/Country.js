import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    // console.log(props)
    const { img, name, region, population } = props.country;

    return (
        <div className="country">
            <div className="country__image">
                <img src={props.country.flag} alt=""/>
            </div>
            <div className="country_decription">
                <h3>This is {name}</h3>
                <h5>Population: {population}</h5>
                <p><small>Region: {region}</small></p>
                <Link to={`/countryDetails/${name}`}>Show country details</Link>
            </div>
        </div>
    );
};

export default Country;