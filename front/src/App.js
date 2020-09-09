import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Input from "./Components/inputPage";
import Listing from "./Components/listingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/listing">Listing page</Link>
              </li>
              <li>
                <Link to="/input">Input page</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/listing">
              <Listing />
            </Route>
            <Route path="/input">
              <Input />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
