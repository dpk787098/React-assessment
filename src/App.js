import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage/landing-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StoreManagerHomePage from './StoreManagerHome/store-manager-homepage';
import SalesExecutiveHomePage from './SalesExecutiveHome/sales-executive-homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/store-manager-homepage' component={StoreManagerHomePage} />
          <Route path='/sales-executive-homepage' component={SalesExecutiveHomePage} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;

