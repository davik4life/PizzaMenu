// import { useState } from "react";
// import img from "/pizzas/funghi.jpg";
import "./index.css";
// import { pizzaData } from "./data.js";

export default function App() {
	return (
		<div className="container">
			{/* <h1> Welcome To The Pizza Shop</h1> */}
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>;
		</header>
	);
}

function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			<Pizza
				name="Pizza Funghi"
				photoName="/pizzas/funghi.jpg"
				ingredients="Butter, Pure Flour, Salt, Sugar, Salty Cream"
				price={10}
			/>
			<Pizza
				name="Focaccia"
				photoName="/pizzas/focaccia.jpg"
				ingredients="Cheeze, Pure Flour, Salt, Sugar, Cream"
				price={20}
			/>
		</main>
	);
}

function Pizza(props) {
	return (
		<div className="pizza">
			<img src={props.photoName} alt={props.name} />
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price}</span>
			</div>
		</div>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closedHour = 22;
	const openOrClosed =
		hour >= openHour && hour <= closedHour
			? "We're currently Open!!!"
			: "We're currently Closed!!!";
	return <h1 className="footer">{openOrClosed}</h1>;
}
