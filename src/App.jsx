import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssetData } from './redux/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * assets.length);
      const asset = assets[index];

      const updated = {
        id: asset.id,
        price: parseFloat((asset.price + Math.random() * 100 - 50).toFixed(2)),
        change1h: parseFloat((Math.random() * 10 - 5).toFixed(2)),
        change24h: parseFloat((Math.random() * 10 - 5).toFixed(2)),
        change7d: parseFloat((Math.random() * 10 - 5).toFixed(2)),
      };

      dispatch(updateAssetData(updated));
    }, 3000);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div style={{ backgroundColor: '#111', padding: '20px', minHeight: '100vh' }}>
      <CryptoTable />
    </div>
  );
}

export default App;
