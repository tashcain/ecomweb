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
import Proinfo06 from './component/products/proinfo/proinfo06';
import Proinfo07 from './component/products/proinfo/proinfo07';
import Proinfo08 from './component/products/proinfo/proinfo08';
import Proinfo09 from './component/products/proinfo/proinfo09';
import Proinfo10 from './component/products/proinfo/proinfo10';
import Proinfo11 from './component/products/proinfo/proinfo11';
import Buypro from './component/products/buypro/buypro';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';
import Gpay from './component/products/proinfo/gpay/gpayqr';

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
      <Route exact path = '/prod/06' component = {Proinfo06}/>
      <Route exact path = '/prod/07' component = {Proinfo07}/>
      <Route exact path = '/prod/08' component = {Proinfo08}/>
      <Route exact path = '/prod/09' component = {Proinfo09}/>
      <Route exact path = '/prod/10' component = {Proinfo10}/>
      <Route exact path = '/prod/11' component = {Proinfo11}/>
      <Route exact path = '/prod/buyprod/:id' component = {Buypro}/>
      <Route exact path = '/tttt' component = {Gpay}/>
     

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
