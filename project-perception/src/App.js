import './App.css';
import React, {useEffect, useState} from "react";
import * as ROUTES from "./constants/routes"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoriesStart from "./pages/stories_start";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.STORIES_START} component={StoriesStart} />
      </Switch>
    </Router>
  );
}

export default App;
