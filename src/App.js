import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Home from './page/Home/Home';
import Register from './page/register/Register'

//components
import Header from './components/header/Header';

function App() {
  return (
    <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
