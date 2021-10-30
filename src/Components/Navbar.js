import React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css";
import "./About";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar(props) {
    return (
        <div className='my-1'>
             <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.elementmode} bg-${props.elementmode}`}>
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">{props.home}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/'>{props.about}</a>
                </li>
              </ul>
              
              <form className="d-flex">
                <input className={`form-control me-2 bg-${props.elementmode}`} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
                <div id="darkmodeswitch" className="form-check form-switch mx-3" >
                  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                </div>
          </nav>
        </div>
    )
}
Navbar.propTypes = {title: PropTypes.string,
                    home: PropTypes.string,
                    about: PropTypes.string,}

Navbar.defaultProps= {
                      title : " TextEditor",
                      home : "Home",
                      about : "About"}
