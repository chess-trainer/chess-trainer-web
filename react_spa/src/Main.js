import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tactics from "./Tactics";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div class="nav-bar">
          <ul className="header">
            <div class="menul">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/tactics">Tactics</NavLink></li>
            </div>
            <div class="menur">
              <li class="dropdown">
                <NavLink to="/contact">Username</NavLink>
                <div class="dropdown-content">
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                </div>
              </li>          
            </div>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/tactics" component={Tactics}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
