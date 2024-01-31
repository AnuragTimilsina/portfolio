import React from "react";
import "./about.css";
import me from "../../assets/Anurag-Profile.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About ME</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img src={me} alt="my image" />
					</div>
				</div>

				<div className="about_content">
					{/* <div className="about_cards">
						<article className="about_card">
							<FaAward />
							<h5>Experience</h5>
							<small>3+ Years Working</small>
						</article>

						<article className="about_card">
							<FiUsers />
							<h5>Clients</h5>
							<small>Searching</small>
						</article>

						<article className="about_card">
							<VscFolderLibrary />
							<h5>Projects</h5>
							<small>7+ Completed</small>
						</article>
					</div> */}
					<p>
					I am Anurag Timilsina, a seasoned researcher, Python programmer, and dedicated practitioner of machine learning and deep learning. With a knack for transforming data into actionable insights, I specialize in making machines emulate human intelligence.
					</p>

					{/* <a href="#contact" className="btn btn-primary">
						Lets Connect
					</a> */}
				</div>
			</div>
		</section>
	);
};

export default About;
