import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// ChartJS components register karna zaroori hai
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  const getColor = (value) => (value >= 0 ? 'green' : 'red');
  const getArrow = (value) => (value >= 0 ? '▲' : '▼');

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
        Real-Time Crypto Tracker
      </h1>

      <table
        style={{
          width: '100%',
          color: 'white',
          borderCollapse: 'collapse',
          border: '1px solid #444',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#111' }}>
            <th style={cellStyle}>#</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Symbol</th>
            <th style={cellStyle}>Logo</th>
            <th style={cellStyle}>Price</th>
            <th style={cellStyle}>1h%</th>
            <th style={cellStyle}>24h%</th>
            <th style={cellStyle}>7d%</th>
            <th style={cellStyle}>Market Cap</th>
            <th style={cellStyle}>Volume(24h)</th>
            <th style={cellStyle}>Supply</th>
            <th style={cellStyle}>7d Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((coin, index) => (
            <tr key={coin.id} style={{ textAlign: 'center', backgroundColor: index % 2 === 0 ? '#222' : '#111' }}>
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>{coin.name}</td>
              <td style={cellStyle}>{coin.symbol}</td>
              <td style={cellStyle}>
                <img
                  src={coin.image}
                  alt={coin.symbol}
                  style={{ width: '25px', height: '25px' }}
                />
              </td>
              <td style={cellStyle}>${coin.current_price?.toLocaleString() || 'N/A'}</td>
              <td style={{ ...cellStyle, color: getColor(coin.price_change_percentage_1h_in_currency) }}>
                {getArrow(coin.price_change_percentage_1h_in_currency)}{' '}
                {Math.abs(coin.price_change_percentage_1h_in_currency || 0).toFixed(2)}%
              </td>
              <td style={{ ...cellStyle, color: getColor(coin.price_change_percentage_24h_in_currency) }}>
                {getArrow(coin.price_change_percentage_24h_in_currency)}{' '}
                {Math.abs(coin.price_change_percentage_24h_in_currency || 0).toFixed(2)}%
              </td>
              <td style={{ ...cellStyle, color: getColor(coin.price_change_percentage_7d_in_currency) }}>
                {getArrow(coin.price_change_percentage_7d_in_currency)}{' '}
                {Math.abs(coin.price_change_percentage_7d_in_currency || 0).toFixed(2)}%
              </td>
              <td style={cellStyle}>${coin.market_cap?.toLocaleString() || 'N/A'}</td>
              <td style={cellStyle}>${coin.total_volume?.toLocaleString() || 'N/A'}</td>
              <td style={cellStyle}>{coin.circulating_supply?.toLocaleString() || 'N/A'}</td>
              <td style={cellStyle}>
                {coin.sparkline_in_7d?.price ? (
                  <Line
                    data={{
                      labels: coin.sparkline_in_7d.price.map((_, i) => i),
                      datasets: [
                        {
                          data: coin.sparkline_in_7d.price,
                          borderColor: '#16c784',
                          borderWidth: 2,
                          tension: 0.4,
                          pointRadius: 0,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      plugins: { legend: { display: false } },
                      scales: {
                        x: { display: false },
                        y: { display: false },
                      },
                    }}
                    width={100}
                    height={40}
                  />
                ) : (
                  <span style={{ color: 'gray' }}>N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Style object for each cell
const cellStyle = {
  border: '1px solid #444',
  padding: '8px',
};

export default CryptoTable;
