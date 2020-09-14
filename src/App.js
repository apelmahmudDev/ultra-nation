import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then( data => setCountries(data))
    .catch(err => console.log(err))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart);
  }
  console.log(cart)

  return (
    <div className="App">

      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country added: {cart.length}</h3>
      
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country 
          key={country.alpha3Code} 
          country={country} 
          handleAddCountry={handleAddCountry}
          ></Country>)
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
