import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Contacto } from './components/pages/Contacto.jsx'
import { Home } from './components/pages/Home.jsx'


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
      </Switch>
      </Router>

    </>
  );
}

export default App;
