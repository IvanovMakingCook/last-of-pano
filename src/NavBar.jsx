import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/panolens">Panolens</Link>
        </li>
        <li>
          <Link to="/photo-sphere-viewer">Photo Sphere Viewer</Link>
        </li>
        <li>
          <Link to="/cesium">CesiumJS</Link>
        </li>
        <li>
          <Link to="/krpano">KRPano</Link>
        </li>
        <li>
          <Link to="/panellum">Panellum JS</Link>
        </li>
        <li>
          <Link to="/marzipano">Marzipano</Link>
        </li>
        <li>
          <Link to="/panoviewer">PanoViewer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;