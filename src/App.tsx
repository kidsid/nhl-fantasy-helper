import React from 'react';
import './App.css';
import './assets/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import config from './config.json';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Scores from './pages/Scores/Scores';
import Teams from './pages/Teams/Teams';
import Team from './pages/Team/Team';

function App() {
  return (
    <div className="App">
      <Header items={config.Header.Items} />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Scores" component={Scores} />
          <Route path="/Teams" component={Teams} />
          <Route path="/Teams/:id" component={Team} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
