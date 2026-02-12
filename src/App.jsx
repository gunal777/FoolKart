import { Outlet } from 'react-router'
import Navbar from './components/NavBar'
import ItemData from './hooks/fetchProducts';
import './App.css'
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const products = ItemData();

  return (
    <>
      <Navbar totalItems={cart.length} />
      <Outlet context={{...products, cart, setCart}} />
    </>
  );
}

export default App
