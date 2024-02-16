import { useRef } from "react";

// useRef hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// useRef can be used to access DOM elements.

export function App() {
	const inputElement = useRef<HTMLInputElement>(null);

	const focusInput = () => {
		if (!inputElement?.current)
			return;

		inputElement.current.focus();
	};

	return (
		<>
			<input type="text" ref={inputElement} />
			<button onClick={focusInput}>Focus Input</button>
		</>
	);
}