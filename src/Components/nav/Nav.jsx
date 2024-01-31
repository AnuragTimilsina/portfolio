import React, { useState } from "react";
import "./nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
// import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<nav>
			<a
				href="#"
				title="Home"
				onClick={() => setActiveNav("#")}
				className={activeNav === "#" ? "active" : ""}
			>
				<AiOutlineHome />
			</a>

			<a
				href="#about"
				title="About Me"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>

			<a
				href="#experience"
				title="experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}
			>
				<MdEventAvailable />
			</a>

			{/* <a
				href="#services"
				title="services"
				onClick={() => setActiveNav("#services")}
				className={activeNav === '#services' ? "active" : ''}
			>
				<FaHandsHelping />
			</a> */}

			<a
				href="#contact"
				title="contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<AiOutlineMessage />
			</a>
		</nav>
	);
};

export default Nav;
