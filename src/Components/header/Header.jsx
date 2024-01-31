import React from "react";
import "./header.css";
import CTA from "./Cta";
import profile from "../../assets/Anurag-Second.png";
import scroll from "../../assets/scroll-down.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className="container header_container">
				<h5>Hello I'm</h5>
				<h1>Anurag Timalsina</h1>
				<h5 className="text-light">a Student and researcher at Kathmandu University</h5>
				<CTA />
				<HeaderSocials />

				<div className="profileImg">
					<img src={profile} alt="my picture" />
				</div>

				<a href="#contact" className="scroll_down" title="Scroll Down">
					<img src={scroll} alt="scroll-down" />
				</a>
			</div>
		</header>
	);
};

export default Header;
