import React from "react";
import "./services.css";

import { BiCheck } from "react-icons/bi";

const Services = () => {
	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className="container services_container">
				<article className="service">
					<div className="service_head">
						<h3>UI/UX Design</h3>
					</div>

					<ul className="service_list">
						<li>
							<BiCheck className="service_list-icon" />
							<p>Conduct in-depth user research to gain insights into user needs.</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Create wireframes that provide a clear visual representation of the website  layout</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Develop interactive elements that enhance the user experience</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Create interactive prototypes that simulate the final product</p>
						</li>
					</ul>
				</article>
				{/* END OF UI/UX */}
				<article className="service">
					<div className="service_head">
						<h3>Responsive Website Development</h3>
					</div>

					<ul className="service_list">
						<li>
							<BiCheck className="service_list-icon" />
							<p>Offer custom website development services tailored to client's specific needs</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Optimize website performance by implementing best practices</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Implement SEO strategies to improve website visibility</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Integrate payment gateways and social media platforms to enhance website functionality</p>
						</li>
					</ul>
				</article>
				{/* END OF WEB-DEVELOPMENT */}
				<article className="service">
					<div className="service_head">
						<h3>Mobile Application Development</h3>
					</div>

					<ul className="service_list">
						<li>
							<BiCheck className="service_list-icon" />
							<p>Develop cross-platform mobile applications using React-Native </p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Create visually appealing app designs that are intuitive and easy to use</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p>Integrate payment gateways and social media platforms to enhance website functionality</p>
						</li>
						<li>
							<BiCheck className="service_list-icon" />
							<p> Conduct extensive testing to ensure the app functions correctly</p>
						</li>
					</ul>
				</article>
				{/* END OF Mobile-Development */}
			</div>
		</section>
	);
};

export default Services;
