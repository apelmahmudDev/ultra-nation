import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Country from '../Country/Country';

const Home = () => {
    
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then( data => setCountries(data))
        }, [])

    const handleAddCountry = (country) => {
        const newCart = [...cart, country]
        setCart(newCart);
        }
    
    return (
        <div>
            <h1>Country Loaded: {countries.length}</h1>
        {
            countries.map(country => <Country 
            key={country.alpha3Code} 
            country={country} 
            handleAddCountry={handleAddCountry}
            ></Country>)
        }
        </div>
    );
};

export default Home;