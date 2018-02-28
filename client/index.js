import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App.js";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
