import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'D.O.G.S',
			description: 
				'A social media application to help find your dog a friend.',
			image: 'dogs.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'express', 'handlebars.js'],
			github: 'https://github.com/JenniferFadare/D.O.G.S..git',
			deployed: 'https://murmuring-taiga-40351.herokuapp.com/',
		},
		{
			name: 'Meal Queue',
			description:
				'Meal Queue is an aide to help individuals come up with dinner ideas. Type in a food item and a list of different recipes is presented with an option to view a video tutorial.',
			image: 'mealQ.jpg',
			technologies: ['HTML/SCSS','JavaScript'],
			github: 'https://github.com/axeliono/Meal-Queue.git',
			deployed: 'https://axeliono.github.io/Meal-Queue/',
		},
		{
			name: 'Work Day Scheduler',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: 'work-scheduler.png',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://peters0470.github.io/Work-Day-Scheduler/',
			deployed: 'https://peters0470.github.io/Work-Day-Scheduler/',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget.png',
			technologies: ['JavaScript','MongoDB','Node.js','Express',],
			github: 'https://github.com/peters0470/budget-tracker.git',
			deployed: 'https://shielded-sands-92466.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/peters0470/Weather-Dashboard.git',
			deployed: 'https://peters0470.github.io/Weather-Dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/peters0470/password-challenge.git',
			deployed: 'https://peters0470.github.io/password-challenge/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/peters0470/note-taker.git',
			deployed: 'https://github.com/peters0470/note-taker.git',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;