import React,{Component} from "react";
import '../css/events.css';
 
class Events extends Component{
    state={};
    render()
{
    return(
        <div className="events">
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
            <h2>Past Events</h2>
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
            </div>
    )
}
}
export default Events;