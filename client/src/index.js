import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Checkout from './components/Checkout';
import Featured from './components/Featured';
import Signin from './components/Signin';
import Wines from './components/Wines';
import Spirits from './components/Spirits';
import Beers from './components/Beers';
import Disclaimer from './components/Disclaimer';
import Designers from './components/Designers';


import Topbar from "./components/UniversalComponent/Topbar"
import NavBar from "./components/UniversalComponent/Navbar";
import Footer from "./components/UniversalComponent/Footer";

import * as serviceWorker from './serviceWorker';


const Root = () => (
  <React.Fragment>
    <Router>
      <div className="masterdiv" style={
        {
          margin: "auto",
          width: "82%",
          height: "auto",
          // color: "#5e1715",
          // borderStyle: "solid",
          // borderWidth: "2px",
        }
      }>
        <Topbar />
        <NavBar />
        

        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Admin} exact path="/admin" />
          <Route component={Checkout} exact path="/checkout" />
          <Route component={Featured} exact path="/featured" />
          <Route component={Signin} exact path="/signin" />
          <Route component={Wines} exact path="/wines" />
          <Route component={Spirits} exact path="/spirits" />
          <Route component={Beers} exact path="/beers" />
          <Route component={Disclaimer} exact path="/disclaimer" />
          <Route component={Designers} exact path="/designers" />


        </Switch>
        <Footer />
      </div>
    </Router>
  </React.Fragment>
)







ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




//hot reloading feature from webpack to update page without reloading page
if (module.hot) {
  module.hot.accept();
}
