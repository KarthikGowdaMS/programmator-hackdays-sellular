import React,{Component} from 'react';
import '../css/navbar.css';
class Navbar extends Component{
state={};
render(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Programmator Hackathon</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/events">Events</a>
              </li>
            <li className="nav-item">
                <a className="nav-link" href="/teams">Teams</a>
              </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-item" href="/register"
                ><button className="btn btn-outline-light">Register</button></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    );
}
}
export default Navbar;
