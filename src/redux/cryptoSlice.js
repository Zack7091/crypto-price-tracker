import { createSlice } from '@reduxjs/toolkit';
import bitcoinLogo from '../assets/logos/bitcoin.png';
import ethereumLogo from '../assets/logos/ethereum.png';
import tetherLogo from '../assets/logos/tether.png';
import bnbLogo from '../assets/logos/bnb.png';
import solanaLogo from '../assets/logos/solana.png';
import xrpLogo from '../assets/logos/xrp.png';

const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      image: bitcoinLogo,
      current_price: 50000,
      price_change_percentage_1h_in_currency: -0.5,
      price_change_percentage_24h_in_currency: 2.1,
      price_change_percentage_7d_in_currency: 5.6,
      market_cap: 900000000,
      total_volume: 2000000,
      circulating_supply: 1000000,
      sparkline_in_7d: {
        price: Array.from({ length: 100 }, (_, i) => 50000 + Math.sin(i / 10) * 500),
      },
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      image: ethereumLogo,
      current_price: 3500,
      price_change_percentage_1h_in_currency: 0.2,
      price_change_percentage_24h_in_currency: 1.5,
      price_change_percentage_7d_in_currency: -3.2,
      market_cap: 400000000,
      total_volume: 1500000,
      circulating_supply: 800000,
      sparkline_in_7d: {
        price: Array.from({ length: 100 }, (_, i) => 3500 + Math.cos(i / 10) * 150),
      },
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      image: tetherLogo,
      current_price: 1,
      price_change_percentage_1h_in_currency: 0,
      price_change_percentage_24h_in_currency: 0,
      price_change_percentage_7d_in_currency: 0,
      market_cap: 70000000,
      total_volume: 3000000,
      circulating_supply: 70000000,
      sparkline_in_7d: {
        price: Array(100).fill(1),
      },
    },
    {
      id: 4,
      name: 'BNB',
      symbol: 'BNB',
      image: bnbLogo,
      current_price: 400,
      price_change_percentage_1h_in_currency: -0.3,
      price_change_percentage_24h_in_currency: 0.8,
      price_change_percentage_7d_in_currency: 2.9,
      market_cap: 80000000,
      total_volume: 1000000,
      circulating_supply: 200000,
      sparkline_in_7d: {
        price: Array.from({ length: 100 }, (_, i) => 400 + Math.sin(i / 5) * 10),
      },
    },
    {
      id: 5,
      name: 'Solana',
      symbol: 'SOL',
      image: solanaLogo,
      current_price: 150,
      price_change_percentage_1h_in_currency: 0.1,
      price_change_percentage_24h_in_currency: 2.3,
      price_change_percentage_7d_in_currency: -1.1,
      market_cap: 50000000,
      total_volume: 1200000,
      circulating_supply: 300000,
      sparkline_in_7d: {
        price: Array.from({ length: 100 }, (_, i) => 150 + Math.sin(i / 4) * 8),
      },
    },
    {
      id: 6,
      name: 'XRP',
      symbol: 'XRP',
      image: xrpLogo,
      current_price: 0.8,
      price_change_percentage_1h_in_currency: -0.2,
      price_change_percentage_24h_in_currency: 0.5,
      price_change_percentage_7d_in_currency: 1.2,
      market_cap: 30000000,
      total_volume: 900000,
      circulating_supply: 35000000,
      sparkline_in_7d: {
        price: Array.from({ length: 100 }, (_, i) => 0.8 + Math.cos(i / 5) * 0.05),
      },
    },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    // You can add dynamic update logic later
  },
});

export const { updateAssetData } = cryptoSlice.actions;
export default cryptoSlice.reducer;

