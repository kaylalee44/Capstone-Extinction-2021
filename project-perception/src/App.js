import React, {useEffect, useState} from "react";
import './index.css'
import * as ROUTES from "./constants/routes"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoriesPage from './pages/stories';
import { NavBar } from './components/navbar/navbar';
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
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
