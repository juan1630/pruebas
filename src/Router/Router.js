// dependencies
import React from 'react';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';
//components
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Logout from '../../src/services/logout';
import SearchBarIcon from '../components/icons/searchBar';
import SearchBar from '../components/SearchBar/index';
//import Page from '../components/Page404';

const AppRouter= ()=> {
  return(
<Router>
  <div className="App-header">
    <div className="header">
    <ul>
    <SearchBar></SearchBar>
   <button className="btnLogout search">  <SearchBarIcon></SearchBarIcon> </button>
      <li>
        <Link to="/" className="main">Home</Link>
      </li>
      <li>
        <Link to="/About" className="main">About us</Link>
      </li>
      <li>
        <Link to="/Contacto" className="main" >Contacto</Link>
      </li>
      <Logout></Logout>
    </ul>
    <Route exact path="/" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Contacto" component={Contact} />
    </div>
  </div>
</Router>
  );

}


export default AppRouter;