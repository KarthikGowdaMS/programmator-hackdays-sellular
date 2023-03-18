import React,{Component} from "react";
import '../css/footer.css';

class Contact extends  Component{
    state={};
    render(){
        return(
            <footer>
            <section id="contact">
                <div class="container-fluid">
                  <h2 class="contact-heading">Contact Us</h2>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="address">
                        <h4><i class="fa fa-sharp fa-solid fa-location-dot"></i>Address</h4>
                        <div class="pset">
                          <p>Programmator</p>
                          <p>The National Institute of Engineering</p>
                          <p>Mysuru</p>
                        </div>
                      </div>
                      <div class="phone">
                        <h4><i class="fa fa-solid fa-phone"></i>Phone</h4>
                        <div class="pset">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p>Navaneeth Jain S.L.</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>+91 86748 71546</p>
                                </div>
                            </div>
                        </div>
                        <div class="pset">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p>Dinesh S</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>+91 86468 46548</p>
                                </div>
                            </div>
                        </div>
                        <div class="pset">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p>Kartik Gowda M S</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>+91 87646 14684</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="email">
                        <h4><i class="fa fa-solid fa-envelope"></i>Email</h4>
                        <div class="pset">
                          <p>navaneethjainsl@gmail.com</p>
                        </div>
                        <div class="pset">
                          <p>karthikgowdams27@gmail.com</p>
                        </div>
                        <div class="pset">
                          <p>dineshsarvan2114@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 forms">
                      <h3>We'd love to hear from you!</h3>
                      <form>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email"/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="subject">Subject</label>
                          <input type="text" class="form-control" id="subject"/>
                        </div>
                        <div class="form-group">
                          <label for="message">Message</label>
                          <input type="text" class="form-control" id="message"/>
                        </div>
                        <input type="button" value="Send Mail" id="EmailBtn" onclick="sendMail()"/>
                      </form>
                    </div>
                  </div>
          
                  <div class="social">
                    <a href="https://www.instagram.com/navaneethjains.l/"><i class="fa fa-2x fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/navaneethjainsl"><i class="fa fa-2x fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com"><i class="fa fa-2x fa-brands fa-youtube"></i></a>
                    <a href="https://github.com/navaneethjainsl"><i class="fa fa-2x fa-brands fa-github large"></i></a>
                  </div>
                </div>
              </section>
    
    
            <center><p>&copy; 2023 Hackathon Management System</p></center>
        </footer>
        );
    }
}
export default Contact;