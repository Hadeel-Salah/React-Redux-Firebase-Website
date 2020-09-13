import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails/ProjectDetails'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />

          </Switch> 
        </BrowserRouter>
      </div>
  );
}

export default App;
