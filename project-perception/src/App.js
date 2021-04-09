import React, {useEffect, useState} from "react";
import './index.css'
import * as ROUTES from "./constants/routes"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoriesStart from "./pages/stories_start";
import Stories from './pages/stories';
import { NavBar } from './components/navbar/navbar';
import { TurtleStory1 } from "./pages/turtle_story_1";

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
            <Route path={ROUTES.STORY_TURTLE_1}  component={TurtleStory1}/>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
