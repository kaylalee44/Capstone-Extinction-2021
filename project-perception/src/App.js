import React, {useEffect, useState} from "react";
import './index.css'
import * as ROUTES from "./constants/routes"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoriesPage from './pages/stories';
import { NavBar } from './components/navbar/navbar';
import { TurtleStory1 } from "./pages/turtle_story_1";
import Footer from './components/footer/index';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Router>
          <Switch>
            <Route path={ROUTES.STORIES} component={StoriesPage} />
            <Route path={ROUTES.STORY_TURTLE_1}  component={TurtleStory1} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
