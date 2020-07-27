import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// using sass instead of css (always use extn .scss) (sass docs - https://sass-lang.com/documentation/syntax)
import './App.scss';


import ListingDetail from './components/Listing-detail'
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';
function App() {
  return (
    /*
     * added basic routes
     */
    <Router>
      <Switch>

        <Route exact path="/">
        <Header/>
        </Route>
        <Route exact path="/list">
        <HeaderTop/> 
        <ListingDetail/>
          
        </Route>
       
       
        
      </Switch>
    </Router>
  );
}

export default App;
