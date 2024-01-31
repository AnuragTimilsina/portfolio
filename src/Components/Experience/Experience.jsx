import React from "react";
import "./experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="experience">
			<h5>Skills That I Have</h5>
			<h2>My Experience</h2>

			<div className="container experience_container">
				<div className="experience_frontend">
					<h3>Core Skills</h3>
					<div className="experience_content">
						<article className="experience_details">
							<BsPatchCheckFill className="experience_details-icon"/>
							<div>
								<h4>Python</h4>
								{/* <small className="text-light">Experienced</small> */}
							</div>
						</article>

						<article className="experience_details">
							<BsPatchCheckFill className="experience_details-icon"/>
							<div>
								<h4>Machine Learning</h4>
								{/* <small className="text-light">Intermediate</small> */}
							</div>
						</article>

						<article className="experience_details">
							<BsPatchCheckFill className="experience_details-icon"/>
							<div>
								<h4>Deep Learning</h4>
								{/* <small className="text-light">Intermediate</small> */}
							</div>
						</article>

						<article className="experience_details">
							<BsPatchCheckFill className="experience_details-icon"/>
							<div>
								<h4>Computer Vision</h4>
								{/* <small className="text-light">Intermediate</small> */}
							</div>
						</article>

						<article className="experience_details">
							<BsPatchCheckFill className="experience_details-icon"/>
							<div>
								<h4>NLP (Natural Language Processing)</h4>
								{/* <small className="text-light">Beginner</small> */}
							</div>
						</article>						
					</div>
				</div>
				{/* END OF FRONTEND */}
				<div className="experience_backend">
					<div className="experience_frontend">
						<h3>Additional Skills</h3>
						<div className="experience_content">
							<article className="experience_details">
								<BsPatchCheckFill className="experience_details-icon"/>
								<div>
									<h4>Research</h4>
									{/* <small className="text-light">Beginner</small> */}
								</div>
							</article>

							<article className="experience_details">
								<BsPatchCheckFill className="experience_details-icon"/>
								<div>
									<h4>Django</h4>
									{/* <small className="text-light">Beginner</small> */}
								</div>
							</article>

							<article className="experience_details">
								<BsPatchCheckFill className="experience_details-icon"/>
								<div>
									<h4>Linux</h4>
									{/* <small className="text-light">Beginner</small> */}
								</div>
							</article>

							<article className="experience_details">
								<BsPatchCheckFill className="experience_details-icon"/>
								<div>
									<h4>Flask</h4>
									{/* <small className="text-light">Beginner</small> */}
								</div>
							</article>

							<article className="experience_details">
								<BsPatchCheckFill className="experience_details-icon"/>
								<div>
									<h4>Fast API</h4>
									{/* <small className="text-light">Beginner</small> */}
								</div>
							</article>

							<article className="experience_details">
								<BsPatchCheckFill className="experience_details-icon"/>
								<div>
									<h4>HPC System Administration</h4>
									{/* <small className="text-light">Beginner</small> */}
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
