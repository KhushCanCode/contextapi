import './App.css'
import { CartProvider } from './store/CartContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx'
import Shop from './components/Shop.jsx'
import Payment from './components/Payment.jsx'

function App() {

  return (
    <CartProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Shop/>}/>
        <Route path="/payment" element = {<Payment/>}/>
      </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
