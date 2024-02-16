import { useCallback, useState } from "react";
import Todos from "./Todos";

// useCallback hook can be used to prevent a component from re-rendering unless its props have changed.

export const App = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState<string[]>([]);

	const increment = () => {
		setCount(c => c + 1);
	};

	// only call setTodos when the todos prop changes
	const addTodo = useCallback(() => {
		setTodos(t => [...t, "New Todo"]);
	}, [todos]);

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
}
