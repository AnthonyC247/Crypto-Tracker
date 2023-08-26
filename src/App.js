import React from 'react'; // Don't forget to import React
import './App.css';

function App() {
  const data = {
    bitcoin: { usd: 45000 }, // Example data, replace with actual data
    ethereum: { usd: 3200 }, // Example data, replace with actual data
    ripple: { usd: 1.2 },    // Example data, replace with actual data
  };

  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin (BTC)</td>
            <td>{data['bitcoin']['usd']}</td>
          </tr>
          <tr>
            <td>Ethereum (ETH)</td>
            <td>{data['ethereum']['usd']}</td>
          </tr>
          <tr>
            <td>Ripple (XRP)</td>
            <td>{data['ripple']['usd']}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
