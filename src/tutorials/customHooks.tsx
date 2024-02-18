import { useState, useEffect } from "react";

// Hooks are just reusable functions.
// Therefore you can define your own so long as they are prefixed with 'use'.

type Todo = {
	userId: string,
	id: number,
	title: string,
	completed: boolean
}

// Here we define a reusable hook for using fetch API to make requests with useEffect
const useFetch = (url: string) => {
	const [data, setData] = useState<Todo[]>([]);

	// note: to use async/await, you have to define the function and call it
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		async function fetchData() {
			const response = await fetch(url, { signal });
			const data = await response.json();
			setData(data);
		}

		fetchData();

		return () => {
			controller.abort();
		};
	}, [url]);

	return [data];
};

export const Home = () => {
	const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

	return (
		<>
		 {data &&
		 	data.map(item => <p key={item.id}>{item.title}</p>)}
		</>
	);
}