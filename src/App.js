import React from "react";
import "./app.scss";
import ChildrenList from "./Pages/ChildrenList/ChildrenList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ChildrenList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
