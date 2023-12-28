// import { useState } from "react";
// import img from "/pizzas/funghi.jpg";
import "./index.css";
// import { pizzaData } from "./data.js";

export default function App() {
	return (
		<>
			<h1> Welcome To The Pizza Shop</h1>
			<Header />
			<Menu />
			<Footer />
		</>
	);
}

function Header() {
	return <h1>Fast React Pizza Company</h1>;
}

function Menu() {
	return (
		<>
			<h2>Our Menu</h2>
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
		</>
	);
}

function Footer() {
	return <h1>{new Date().toLocaleTimeString()} We're currently Open!!!</h1>;
}
function Pizza() {
	return (
		<>
			<img src="/pizzas/funghi.jpg" alt="Nice Pizza" />
			<h2>Delicious Pizza available today! </h2>
			<p>A taste would leave you coming back for more!!!</p>
		</>
	);
}
