"use client";

import { useState } from "react";
import styles from "./Input.module.css";

/**
 * Input component for the terminal interface.
 * @param {Object} props
 * @param {string} [props.command]
 * @param {Function} props.onSubmit
 * @returns {JSX.Element}
 */
export default function Input({ command, onSubmit }) {
	const [_command, setCommand] = useState(command ? command : "");

	const handleSubmit = (e) => {
		e.preventDefault();
		setCommand("");
		return onSubmit(_command);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="command">
				<span style={{ color: "#ff9e64" }}>λ</span> ::{" "}
				<span style={{ color: "var(--primary)" }}>~</span>{" "}
				<span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
			</label>

			<input
				type="text"
				className={styles.input}
				value={_command}
				onChange={(e) => setCommand(e.target.value)}
				disabled={command ? true : false}
				ref={(input) => input && !command && input.focus()}
				autoFocus={command === ""}
			/>
		</form>
	);
}
