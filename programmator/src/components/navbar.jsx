import React,{Component} from 'react';
import '../css/navbar.css';
class Navbar extends Component{
state={};
render(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Programmator Hackathon</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/events">Events</a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Teams</a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Resources</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-item" href="/"
                ><button class="btn btn-outline-light">Register</button></a
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
