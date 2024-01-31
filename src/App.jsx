import React from "react";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/portfolio/Portfolio";
import Publication from "./Components/publications/Publication";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />			
			<Portfolio />
			<Publication />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
