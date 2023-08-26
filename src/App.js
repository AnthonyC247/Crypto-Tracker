import React, { useState, useEffect } from 'react'; // Don't forget to import React
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [currency, setCurrency] = useState('usd');
  useEffect(() => {
    // Fetch cryptocurrency price data from the API
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd,eur'
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const getCryptoRows = () => {
    return Object.keys(cryptoData).map((crypto) => ({
      name: crypto,
      price: cryptoData[crypto][currency],
    }));
  };

  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <img src={process.env.PUBLIC_URL + '/ethereum-symbol.jpeg'} alt="Ethereum" />

      <div>
        <label htmlFor="currency">Select Currency:</label>
        <select id="currency" value={currency} onChange={handleChangeCurrency}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Price ({currency.toUpperCase()})</th>
          </tr>
        </thead>
        <tbody>
          {getCryptoRows().map((crypto) => (
            <tr key={crypto.name}>
              <td>{crypto.name}</td>
              <td>{crypto.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;





