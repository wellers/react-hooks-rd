import {useState, useEffect } from "react";

// useEffect allows you to perform side effects in your components.
// Examples include: fetching data, directly updating the DOM, and timers.

// This is a contrived example using setTimeout
export function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount(count => count + 1);
		}, 1000);

		// clear timeout to reduce memory leaks
		return () => clearTimeout(timer);
	}, []); // pass empty array to ensure the update only happens once

	return <h1>I've rendered {count} times!</h1>
}

export function Counter() {
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	useEffect(() => {
		setCalculation(() => count * 2);		
	}, [count]); // count depends on count changing

	return (
		<>
			<p>Count: {count}</p>
			<button onClick={() => setCount(c => c + 1)}>+</button>
			<p>Calculation: {calculation}</p>
		</>
	);
}