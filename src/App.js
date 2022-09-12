import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      {/* <main> */}
      {/* <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch> */}
      {/* </main> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
