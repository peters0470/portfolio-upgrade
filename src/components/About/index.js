import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Photo.png')}
					alt="Ryan Peters"
					className="photo"
				/>
			</div>
			<div>
				<p>
                The past eighteen years I have been a successful chef in the Austin area. 
                I am a single father of two little girls who was left out in the cold following the pandemic. 
                I quickly realized how little value I held in an industry that demanded more than it gave. 
                The time unemployed inspired me to make a change to do the best for my family. 
                I wish to find a new career in the web development industy and I am starting to take those steps necessary. 
                I have enrolled in a coding bootcamp through the University of Texas and will attain the skills necessary to begin a career in web development.
				</p>
				
					
				
			</div>
		</section>
	);
}

export default About;