import React from "react";
import Navbar from "../../js/component/Navbar.jsx";
import Jumbotron from "../../js/component/Jumbotron.jsx";
import CardList from "./CardList.jsx";
import Footer from "../../js/component/Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		
		<Navbar/>
		<div className="container">
			<Jumbotron/>
			<CardList/>
		</div>
		<Footer/>
		
			</>
	);
};

export default Home;
