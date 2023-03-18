import React,{Component} from 'react';
import '../css/main.css';
class Main extends Component{
    state={};
    render(){
        return(
            <main>
		<section class="banner">
			<h2>Welcome to the Hackathon Management System</h2>
			<p>Streamline the organization and execution of your hackathons with our user-friendly system.</p>
			<a href="/"><button class="btn btn-dark">Learn More</button></a>
		</section>
		<section class="events" id="events">
			<h2>Upcoming Events</h2>
			<div class="event-card">
				<h3>Hackathon Name</h3>
				<p>Date: MM/DD/YYYY</p>
				<p>Location: City, State</p>
				<a href="/"><button class="btn btn-outline-dark">Register Now</button></a>
			</div>
			<div class="event-card">
				<h3>Hackathon Name</h3>
				<p>Date: MM/DD/YYYY</p>
				<p>Location: City, State</p>
				<a href="/"><button class="btn btn-outline-dark">Register Now</button></a>
			</div>
			<div class="event-card">
				<h3>Hackathon Name</h3>
				<p>Date: MM/DD/YYYY</p>
				<p>Location: City, State</p>
				<a href="/"><button class="btn btn-outline-dark">Register Now</button></a>
			</div>
		</section>
	</main>
        )
    }
}
export default Main;