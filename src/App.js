import React from "react";
import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch"

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
