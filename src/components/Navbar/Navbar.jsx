import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar p-6 bg-gray-900 border-white border-b">
      <div className="container flex justify-between">
        <Link to="/" className="navbar-brand" style={{fontFamily: 'fantasy'}}>WriteWise</Link>
        <div className="navbar-nav flex gap-5">
          <h2 className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </h2>
          <h2 className="nav-item">
            <Link to="/blogs" className="nav-link">Blogs</Link>
          </h2>
          <h2 className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </h2>
          <h2 className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </h2>
          <h2 className="nav-item">
            <Link to="/newblog" className="nav-link">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
