import { useState } from "react";

// Passing state as props though each nested component.
// This is an anti-pattern called "prop drilling" and Context should be used instead.

export function Component1() {
	const [user, setUser] = useState("Jesse Hall");

	return (
		<>
			<h1>{`Hello ${user}!`}</h1>
			<Component2 user={user} />
		</>
	);
}

function Component2({ user }) {
	return (
		<>
			<h1>Component 2</h1>
			<Component3 user={user} />
		</>
	);
}

function Component3({ user }) {
	return (
		<>
			<h1>Component 3</h1>
			<h2>{`Hello ${user} again!`}</h2>
		</>
	);
}