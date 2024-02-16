import { useState, useMemo } from "react";

// useMemo hook returns a memoized value.
// Think of memoization as caching a value so that is does not need to be recalculated.
// useMemo will only run when one of its dependencies updates.

export const App = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState<string[]>([]);

	const calculation = useMemo(() => expensiveCalculation(count), [count]);

	const increment = () => {
		setCount(c => c + 1);
	};

	// only call setTodos when the todos prop changes
	const addTodo = () => setTodos(t => [...t, "New Todo"]);

	return (
		<div>
			<div>
				<h2>My Todos</h2>
				{todos.map((todo, index) => <p key={index}>{todo}</p>)}
				<button onClick={addTodo}>Add Todo</button>
			</div>
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
				<h2>Expensive Calculation</h2>
				{calculation}
			</div>
		</div>
	);
}

const expensiveCalculation = num => {
	console.log("Calculating...");
	
	for (let i = 0; i < 1000000000; i++) {
		num += 1;
	}

	return num;
}
