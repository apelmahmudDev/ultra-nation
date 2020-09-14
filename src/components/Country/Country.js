import React from 'react';

const Country = (props) => {
    const {img, name, region, population} = props.country;
    const handleAddCountry = props.handleAddCountry;
    // console.log(props.handleAddCountry)

    const flagStyle = {
        height: '50px'
    }
    const countryStyle = {
        margin: '10px',
        border: '1px solid lightgray', 
        padding: '10px'
    }

    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={props.country.flag} alt=""/>
            <h3>This is {name}</h3>
            <h5>Population: {population}</h5>
            <p><small>Region: {region}</small></p>
            <button onClick={()=> handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;