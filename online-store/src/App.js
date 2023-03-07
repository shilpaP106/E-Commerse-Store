import { useState, useEffect, createContext } from "react";
import './App.css';
import Products from './Components/Products/products';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from "./Components/cart/cart";
import Success from "./Components/Success/success";
export const CartContext = createContext();


function App() {

  const [product, setProduct] = useState([])

  const value = { product, setProduct }

  useEffect(() => {
    if (localStorage.getItem("items")) {
      setProduct(JSON.parse(localStorage.getItem('items')).product)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify({ product }))
    //console.log(product)
  }, [product])

  return (
    <CartContext.Provider value={value}>
      <div className="App">
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/success" element ={<Success/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>

  );
}

export default App;