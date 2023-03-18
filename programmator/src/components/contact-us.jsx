import React, { Component } from "react";
import '../css/footer.css';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="contact">
          <div className="container-fluid">
            <h2 className="contact-heading">Contact Us</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="address">
                  <h4><i className="fa fa-sharp fa-solid fa-location-dot"></i>Address</h4>
                  <div className="pset">
                    <p>Programmator</p>
                    <p>The National Institute of Engineering</p>
                    <p>Mysuru</p>
                  </div>
                </div>
                <div className="phone">
                  <h4><i className="fa fa-solid fa-phone"></i>Phone</h4>
                  <div className="pset">
                    <div className="row">
                      <div className="col-lg-6">
                        <p>Navaneeth Jain S.L.</p>
                      </div>
                      <div className="col-lg-4">
                        <p>+91 86748 71546</p>
                      </div>
                    </div>
                  </div>
                  <div className="pset">
                    <div className="row">
                      <div className="col-lg-6">
                        <p>Dinesh S</p>
                      </div>
                      <div className="col-lg-4">
                        <p>+91 86468 46548</p>
                      </div>
                    </div>
                  </div>
                  <div className="pset">
                    <div className="row">
                      <div className="col-lg-6">
                        <p>Kartik Gowda M S</p>
                      </div>
                      <div className="col-lg-4">
                        <p>+91 87646 14684</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email">
                  <h4><i className="fa fa-solid fa-envelope"></i>Email</h4>
                  <div className="pset">
                    <p>navaneethjainsl@gmail.com</p>
                  </div>
                  <div className="pset">
                    <p>karthikgowdams27@gmail.com</p>
                  </div>
                  <div className="pset">
                    <p>dineshsarvan2114@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 forms">
                <h3>We'd love to hear from you!</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="email">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" className="form-control" id="subject" />
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <input type="text" className="form-control" id="message" />
                  </div>
                  <input type="button" value="Send Mail" id="EmailBtn" onclick="sendMail()" />
                </form>
              </div>
            </div>

            <div className="social">
              <a href="https://www.instagram.com/navaneethjains.l/"><i className="fa fa-2x fa-brands fa-instagram"></i></a>
              <a href="https://twitter.com/navaneethjainsl"><i className="fa fa-2x fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com"><i className="fa fa-2x fa-brands fa-youtube"></i></a>
              <a href="https://github.com/navaneethjainsl"><i className="fa fa-2x fa-brands fa-github large"></i></a>
            </div>
          </div>
        </section>


        <center><p>&copy; 2023 Hackathon Management System</p></center>
      </div>
    );
  }
}
export default Contact;