import React from 'react';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProductList from './component/ProductList'
import {Route,Routes ,Switch, Navigate} from 'react-router-dom'
import Login from './component/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SignIn from './component/SignIn';
import { useSelector } from 'react-redux';
import Product from './component/Product';
import Myshop from './component/Myshop';
import Success from './component/Success';
import Contact from './component/Contact';



 const App  =()=> {
    const user= useSelector(state=>state.user.currentUser);
 
    return (

      
      <div className="App">
                <Navbar/>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/Myshop' element={<Myshop/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/contact' element={<Contact/>}/>

      

        <Route path="/login" element={user? <Navigate to="/" /> : <Login />}/>

        </Routes>
        <Footer/>
      </div>
    );
  }

export default App;
