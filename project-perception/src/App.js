import React, {useEffect, useState} from "react";
import './index.css'
import * as ROUTES from "./constants/routes"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoriesStart from "./pages/stories_start";
import Stories from './Stories';
import { NavBar } from './Home';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Router>
          <Switch>
            <Route path={ROUTES.STORIES_START} component={StoriesStart} />
            <Route path={ROUTES.STORIES} component={Stories} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
