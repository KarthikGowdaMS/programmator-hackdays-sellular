import React,{Component} from 'react';
import '../css/main.css';
class Main extends Component{
    state={};
    render(){
        return(
            <main>
		<section className="banner">
			<h2>Welcome to the Hackathon Management System</h2>
			<p>Streamline the organization and execution of your hackathons with our user-friendly system.</p>
			<a href="/"><button className="btn btn-dark">Learn More</button></a>
		</section>
		<section className="main-events" >
			<h2>Upcoming Events</h2>
			<div className="event-card">
				<h3>Hackathon Name</h3>
				<p>Date: MM/DD/YYYY</p>
				<p>Location: City, State</p>
				<a href="/"><button className="btn btn-outline-dark">Register Now</button></a>
			</div>
			<div className="event-card">
				<h3>Hackathon Name</h3>
				<p>Date: MM/DD/YYYY</p>
				<p>Location: City, State</p>
				<a href="/"><button className="btn btn-outline-dark">Register Now</button></a>
			</div>
			<div className="event-card">
				<h3>Hackathon Name</h3>
				<p>Date: MM/DD/YYYY</p>
				<p>Location: City, State</p>
				<a href="/"><button className="btn btn-outline-dark">Register Now</button></a>
			</div>
		</section>
	</main>
        )
    }
}
export default Main;