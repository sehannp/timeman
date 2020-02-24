import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Pages/Home/HomePage';
import User from './Pages/User/User';
import About from './Pages/About/About';

// import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
        <Header></Header>
        <hr/>

        <div>
          <Switch>
            <Route exact path="/user" component={User}/>
            <Route exact path="/about" component={About}/>
            <Route path="/" component={Home}/>
          </Switch>
          <hr/>
        </div>

        {/*
        <Footer></Footer> */} 
    </div>
  )
};
export default App;