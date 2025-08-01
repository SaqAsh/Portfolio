import Input from "./Input";
import Output from "./Output";

/**
 * Command component that combines Input and Output components.
 * @param {Object} props
 * @param {string} [props.command]
 * @param {string} [props.output]
 * @param {Function} [props.onSubmit]
 * @returns {JSX.Element}
 */
export default function Command({ command, output, onSubmit }) {
	return (
		<div>
			<Input
				command={command}
				onSubmit={(command) => onSubmit(command)}
			/>
			{output && <Output output={output} />}
		</div>
	);
}
