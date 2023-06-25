import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navigation extends Component {
  render() {
    document.title = 'Contact Management'
    return (
      <div className = "container">

        <nav className="navbar navbar-expand-sm bg-primary navbar-light mt-4">
          <img src="../download.png" width="35" height="35" className="d-inline-block align-center"
          />
          <span class="navbar-brand mb-4 mx-4 mt-4" style={{ fontFamily: "Georgia", fontSize: "0.9rem" ,  position: 'absolute', color: 'white', left: '48%', transform: 'translateX(-50%)'}}>
          CONTACT  MANAGEMENT  SYSTEM
          </span>
        </nav>

        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <div className="collpase navbar-collapse">
            <ul className="nav navbar-nav mr-auto text-center">
              <li className="navbar-item">
                <Link to="/new" className="nav-link">
                  <span class="navbar-brand h2 shadow-lg p-3 mb-5 bg-body rounded mt-3" style={{ fontFamily: "Georgia", color: 'black', left: '28%'}}>
                    Create Contact
                  </span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  <span class="navbar-brand h2 shadow-lg p-3 mb-5 bg-body rounded mt-3" style={{ fontFamily: "Georgia", color: 'black', left: '48%'}}>
                    Show contacts
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navigation;