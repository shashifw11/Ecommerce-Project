import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Components/product/product';
import { SignUP } from './Components/Account/signup';
import {Route,Routes} from "react-router-dom"
import { Mens } from './Components/section/mens';
import { Electronic } from './Components/section/electronic';
import { Womens } from './Components/section/womens';
import { Jewlery } from './Components/section/jewlery';
import { ProductDetails } from './Components/productID/productID';
import { Cart } from './Components/Cart/cart';
import { Payment } from './Components/Checkout/payment';
import { Checkout } from './Components/Checkout/checkout';
import { Login } from './Components/Account/login';
import { Success } from './Components/sucessful/sucess';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Routes> 
      <Route  path = "/login" element = {<Login/>}/>
      <Route  path = "/signup" element = {<SignUP/>}/>
      
      <Route  path = "/" element = {<Product/>}/>

      <Route  path = "/jewlery" element = {<Jewlery/>}/>
      <Route  path = "/electronic" element = {<Electronic/>}/>
      <Route  path = "/womens" element = {<Womens/>}/>
      <Route  path = "/mens" element = {<Mens/>}/>
      <Route  path = "/:id"  element = {<ProductDetails/>} />
      <Route  path = "/cart"  element = {<Cart/>} />
      <Route  path =  "/checkout" element = {<Checkout/>}/>
      <Route  path = "/payment" element = {<Payment/>}/>
      <Route  path = "/success" element = {<Success/>}/>
    </Routes>
    </div>
  );
}

export default App;
