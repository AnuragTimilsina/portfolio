import React from "react";
import "./portfolio.css";
import {data} from "./portfolioModel";

import img1 from "../../assets/profilesagar.jpg";

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio_container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio_item">
							<div className="portfolio_item-image">
								<img src={image} alt={title} />
							</div>

							<h3>{title}</h3>
							<div className="portfolio-cta">
								<a href={github} className="btn" target="_blank">
									Details
								</a>

								{/* <a href={demo} target="_blank" className="btn">
									Live Demo
								</a> */}
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
};

export default Portfolio;
