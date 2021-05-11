import React, { useEffect} from "react";
import * as ROUTES from "./constants/routes"; 
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
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
import LandingPage from "./pages/landing_page";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { CaribouStory1 } from "./pages/caribou_story_1";
import CaribouStoryPredatorDeath from "./pages/caribou_story_1_2";
import CaribouStory2 from "./pages/caribou_story_2";
import CaribouStoryHunterDeath from "./pages/caribou_story_2_1";
import CaribouStory3 from "./pages/caribou_story_3";
import CaribouStorySurviveRun from "./pages/caribou_story_3_1";
import CaribouStorySurviveHuman from "./pages/caribou_story_3_2";
import { RabbitStory1 } from "./pages/rabbit_story_1";
import RabbitStory2 from "./pages/rabbit_story_2";
import RabbitStoryClimateDeath from "./pages/rabbit_story_1_2";
import RabbitStoryPredatorDeath from "./pages/rabbit_story_2_1";
import RabbitStory3 from "./pages/rabbit_story_3";
import RabbitStoryGeneticDeath from "./pages/rabbit_story_3_1";
import RabbitStorySurvive from "./pages/rabbit_story_3_2";

export function ScrollToTop() {
  const { pathname} = useLocation();

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname])
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
            <Switch>
              <Route exact path={ROUTES.HOME} component={LandingPage} />
              <Route path={ROUTES.STORY_HOME} component={HomePage} />
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
              <Route path={ROUTES.STORY_CARIBOU_1} component={CaribouStory1} /> 
              <Route path={ROUTES.STORY_CARIBOU_1_2} component={CaribouStoryPredatorDeath} /> 
              <Route path={ROUTES.STORY_CARIBOU_2} component={CaribouStory2} />    
              <Route path={ROUTES.STORY_CARIBOU_2_1} component={CaribouStoryHunterDeath} /> 
              <Route path={ROUTES.STORY_CARIBOU_3} component={CaribouStory3} />  
              <Route path={ROUTES.STORY_CARIBOU_3_1} component={CaribouStorySurviveRun} /> 
              <Route path={ROUTES.STORY_CARIBOU_3_2} component={CaribouStorySurviveHuman} /> 
              <Route path={ROUTES.STORY_RABBIT_1} component={RabbitStory1} />
              <Route path={ROUTES.STORY_RABBIT_1_2} component={RabbitStoryClimateDeath} /> 
              <Route path={ROUTES.STORY_RABBIT_2} component={RabbitStory2} />
              <Route path={ROUTES.STORY_RABBIT_2_1} component={RabbitStoryPredatorDeath} />
              <Route path={ROUTES.STORY_RABBIT_3} component={RabbitStory3} />
              <Route path={ROUTES.STORY_RABBIT_3_1} component={RabbitStoryGeneticDeath} />
              <Route path={ROUTES.STORY_RABBIT_3_2} component={RabbitStorySurvive} />
            </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
