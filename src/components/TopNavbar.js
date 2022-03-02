import React from 'react';
import { Link } from 'react-router-dom'
const TopNaavbar = () => {

  return <div className='navbar-container'>


    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <Link className="navbar-brand" to="/">React Random Generate paragraph App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="gallery">Gallery</Link>
          </li>

        </ul>

      </div>
    </nav>





  </div>;
};

export default TopNaavbar;
