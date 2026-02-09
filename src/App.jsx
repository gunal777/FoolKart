import { Outlet } from 'react-router'
import Navbar from './components/UI/NavBar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App
