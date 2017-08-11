import React from "react";
import { Router, Route } from "dva/router";
import HomeRouter from "./routes/home-router";
 

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomeRouter} />
    </Router>
  );
}

export default RouterConfig;
