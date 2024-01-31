import React from "react";
import "./publication.css";
import pdf from "../../assets/ArvoAbstract.pdf";

const Research = ({ title, url }) => {
	return (
		<div>
			<h2>{title}</h2>
			<a href={url} target="_blank" rel="noopener noreferrer" className="btn">
				Read More
			</a>
		</div>
	);
};

const Publication = () => {
	return (
		<section id="Publication">
			<h5>Have a look at my</h5>
			<h2>Research Publications</h2>

			<div className="container Publication_container">
				<Research
					title="Advancing Tuberculosis Detection in Chest X-rays: A YOLOv7-Based Approach"
					url="https://www.mdpi.com/2078-2489/14/12/655"
				/>

				<div>
					<h2>Comparing Lumbar Puncture Opening Pressure and Optic Nerve Head Height Measured by Artificial Intelligence in Idiopathic Intracranial Hypertension Patients. </h2>

					<a
						href={pdf}
						target="_blank"
						rel="noopener noreferrer"
						className="btn"
					>
						Read More
					</a>
				</div>				
			</div>
		</section>
	);
};

export default Publication;
