import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tactics from "./Tactics";
import Visual from "./Visual";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div class="nav-bar">
          <ul className="header">
            <div class="menul">
              <li><NavLink to="/">Home</NavLink></li>
              <li class="dropdown">
                <NavLink to="/tactics">Tactics</NavLink>
                <div class="dropdown-content">
                  <NavLink to="/visual">Visual</NavLink>
                </div>
              </li>
            </div>
            <div class="menur">
              <li class="dropdown">
                <NavLink to="/contact">Username</NavLink>
                <div class="dropdown-content">
                  <NavLink to="/login">Login</NavLink>
                </div>
              </li>          
            </div>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/tactics" component={Tactics}/>
            <Route path="/visual" component={Visual}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
