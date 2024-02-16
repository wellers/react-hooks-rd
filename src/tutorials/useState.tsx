import {useState } from "react";

// useState hook allows us to track state in a function component.

export function FavouriteColour() {
	// can set a single value in state
	const [colour, setColour] = useState("red");

	return (
		<>
			<h1>My favourite colour is {colour}!</h1>
			<button
				type="button"
				onClick={() => setColour("blue")}
			>Blue</button>
		</>
	);
}

export function Car() {
	// can set an object in state
	const [car, setCar] = useState({
		brand: "Ford",
		model: "Mustang",
		year: "1964",
		colour: "red"
	});

	// onClick event handler to update colour
	const updateColour = () => {
		setCar(previousState => {
			return { ...previousState, colour: "blue" }
		});
	}

	return (
		<>
			<h1>My {car.brand}</h1>
			<p>
				It is a {car.colour} {car.model} from {car.year}.
			</p>
			<button
				type="button"
				onClick={updateColour}
			>Blue</button>
		</>
	);
}