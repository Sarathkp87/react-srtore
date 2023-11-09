import './App.css';
import Login from './Login';
import ProductDetails from './Productdetails'
import Products from './Products'
import Cartpg from './Cartpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Products' element={<Products/>} ></Route>
      <Route path='/Productdetails' element={<ProductDetails/>}></Route>
      <Route path='/cart' element={<Cartpg/>}></Route>
    </Routes>
    </BrowserRouter>
  </>

  );

}

export default App;
