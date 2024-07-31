import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // Asegúrate de importar estos
import Home from './Home'; // Asegúrate de que estas rutas sean correctas
import About from './About';
import Xd from './Xd';

const Rompetodo = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About Us</Link>
          </li>
          <li>
            <Link to='/Xd'>Xd</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Xd' element={<Xd />} />
      </Routes>
    </div>
  );
}

export default Rompetodo;
