import React from "react";
import Home from "./HomePage/Home";
import About from "./About";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./NavigationBar/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
