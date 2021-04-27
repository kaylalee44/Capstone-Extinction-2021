import React from "react";
import * as ROUTES from "./constants/routes"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoriesPage from './pages/stories';
import { NavBar } from './components/navbar/navbar';
import { TurtleStory1 } from "./pages/turtle_story_1";
import Footer from './components/footer/index';
import TurtleStory2 from "./pages/turtle_story_2";
import TurtleStory3 from "./pages/turtle_story_3";
import TurtleStoryPlasticDeath from "./pages/turtle_story_1_1";
import TurtleStoryVesselDeath from "./pages/turtle_story_2_1";
import TurtleStoryBycatchDeath from "./pages/turtle_story_2_2";
import TurtleStorySurvive from "./pages/turtle_story_3_1";
import TurtleStoryClimateDeath from "./pages/turtle_story_3_2";
import TurtleStoryHarvestDeath from "./pages/turtle_story_3_3";
import MakeAChangePage from "./pages/make-a-change";
import HomePage from "./pages/home";
import About from "./pages/about";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          
            <Switch>
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ABOUT} component={About} />
              <Route path={ROUTES.CHANGE} component={MakeAChangePage} />
              <Route path={ROUTES.STORIES} component={StoriesPage} />
              <Route path={ROUTES.STORY_TURTLE_1}  component={TurtleStory1} />
              <Route path={ROUTES.STORY_TURTLE_2} component={TurtleStory2} /> 
              <Route path={ROUTES.STORY_TURTLE_3} component={TurtleStory3} />
              <Route path={ROUTES.STORY_TURTLE_1_1} component={TurtleStoryPlasticDeath} /> 
              <Route path={ROUTES.STORY_TURTLE_2_1} component={TurtleStoryVesselDeath} />  
              <Route path={ROUTES.STORY_TURTLE_2_2} component={TurtleStoryBycatchDeath} /> 
              <Route path={ROUTES.STORY_TURTLE_3_1} component={TurtleStorySurvive} /> 
              <Route path={ROUTES.STORY_TURTLE_3_2} component={TurtleStoryClimateDeath} />
              <Route path={ROUTES.STORY_TURTLE_3_3} component={TurtleStoryHarvestDeath} />     
            </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
