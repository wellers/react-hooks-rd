import { useState, createContext, useContext } from "react";

// React Context is a way to manage state globally.

const UserContext = createContext("");

export function Component1() {
	const [user, setUser] = useState("Jesse Hall");

	return (
		<UserContext.Provider value="">
			<h1>{`Hello ${user}!`}</h1>
			<Component2 />
		</UserContext.Provider>
	);
}

function Component2() {
	return (
		<>
			<h1>Component 2</h1>
			<Component3 />
		</>
	);
}

function Component3() {
	const user = useContext(UserContext);

	return (
		<>
			<h1>Component 3</h1>
			<h2>{`Hello ${user} again!`}</h2>
		</>
	);
}