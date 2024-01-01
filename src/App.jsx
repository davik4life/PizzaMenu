// import { useState } from "react";
// import img from "/pizzas/funghi.jpg";
import "./index.css";
import { pizzaData } from "./data.js";

export default function App() {
	return (
		<div className="container">
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
			{pizzaData != [] ? (
				<ul className="pizzas">
					{pizzaData.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				"We are currently out of Pizza's. We are working to make sure all these issues gets sorted."
			)}
			{/* 
			Old Implementation...
			{/* <Pizza
						name={pizza.name}
						ingredients={pizza.ingredients}
						price={pizza.price}
						photoName={pizza.photoName}
						soldOut={pizza.soldOut}
					/>
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
			/>*/}
		</main>
	);
}

function Pizza(props) {
	return (
		<li className={props.pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closedHour = 22;
	// const openOrClosed =
	// 	hour >= openHour && hour <= closedHour
	// 		? "We're currently Open!!!"
	// 		: "We're currently Closed!!!";
	return (
		<h1 className="footer">
			{hour >= openHour && hour <= closedHour ? (
				<Order />
			) : (
				`We're currently Closed!!! Come back between the hours ${openHour}:00 and ${closedHour}:00`
			)}
		</h1>
	);
}

function Order() {
	return (
		<div className="order">
			<p>
				We're currently taking orders. Feel free to order online or
				visit us!!!
			</p>
			<button className="btn">Order</button>
		</div>
	);
}
