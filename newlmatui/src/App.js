import React from 'react';
import './App.css';
import Example from './component/navigations/navbar';
import Homeland from './component/Home/homeland';
import Footer from './component/navigations/footer/footer';
import About from './component/About/about';
import Test from './component/test';
import Products from './component/products/product/products';
import Proinfo01 from './component/products/proinfo/proinfo01';
import Proinfo02 from './component/products/proinfo/proinfo02';
import Proinfo03 from './component/products/proinfo/proinfo03';
import Proinfo04 from './component/products/proinfo/proinfo04';
import Proinfo05 from './component/products/proinfo/proinfo05';
import Buypro from './component/products/buypro/buypro';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
     <Example/>
     <div >
    
    
      <Switch>
      <Route exact path = '/' component={Test}/>
      <Route exact path = '/aboutus' component={About}/>
      <Route exact path = '/products' component={Products}/>
      <Route exact path = '/prod/01' component = {Proinfo01}/>
      <Route exact path = '/prod/02' component = {Proinfo02}/>
      <Route exact path = '/prod/03' component = {Proinfo03}/>
      <Route exact path = '/prod/04' component = {Proinfo04}/>
      <Route exact path = '/prod/05' component = {Proinfo05}/>
      <Route exact path = '/buyprod/:id' component = {Buypro}/>
      <Route exact path = '/test' component = {Homeland}/>

      </Switch> 
       
     

       
       
     </div>
     <div>
       <Footer/>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
