import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=338&ext=jpg&ga=GA1.1.1887574231.1711670400&semt=ais" className='logo' />


      <a className="navbar-brand name" to="/"><span className='free'>free</span>BE</a>
      <button className="navbar-toggler four" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link menu " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link menu" to="/Info">Information</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu" to="/About">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu" to="/Report">Report</Link>
          </li>
          

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
