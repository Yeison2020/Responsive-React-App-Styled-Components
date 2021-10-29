import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages:

import Home from "./pages/Home";
import Pricing from "./pages/PricingPage";
import SignupPage from "./pages/SignupPage";

// React component App;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
