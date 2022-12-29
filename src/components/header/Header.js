import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () =>{
  return(
    <>
    <header className="header">
      <h1>OakTech</h1>
    <Link className="link" to="/">Produtos</Link>
       <Link className="link" to="/register">Cadastrar produto</Link>
    </header>
    </>
  )
}

export default Header