import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import { Header } from './components/Header.jsx'
import { Formulario } from './components/Formulario'
function App() {
  return (
    <>
      <Router>
        <Header/>
      </Router>
      <Formulario/>
    </>
  );
}

export default App;
