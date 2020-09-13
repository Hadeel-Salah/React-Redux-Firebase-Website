import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path='/'component={Dashboard} />
          </Switch> 
        </BrowserRouter>
      </div>
  );
}

export default App;
