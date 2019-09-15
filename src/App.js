import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from './components/pokemon/Pokemon';
import {HashRouter as Router,Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App" style={{background: `url(https://raw.githubusercontent.com/ChrisStayte/ReactDex/master/src/pattern.png)`}}>
          <NavBar/>
          <div className="container">
            <switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}/>
            </switch>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
