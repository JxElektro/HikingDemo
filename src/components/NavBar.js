
import React from 'react';
import {BrowserRouter as Router, Route,Link,Routes} from "react-router-dom";
import Home from '../routes/home';
import About from '../routes/about';
import Topics from '../routes/topics';
import './App.css';

/* This is the NavBar Component */
/* The Router component is the parent of all the other components */
/* The Routes component is the parent of all the Route Componentes and switches between them */


export default function NavBar() {
  return (
    <Router>
      <nav className='navBar'>
        <ul className='navBarUl'>
          <li className='navBarLi'>
            <Link to="/">Home</Link>
          </li>
          <li className='navBarLi'>
            <Link to="/about">About</Link>
          </li>
          <li className='navBarLi'>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </Router>
      );

}