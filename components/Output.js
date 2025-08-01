/**
 * Output component for displaying command results.
 * @param {Object} props
 * @param {string} props.output
 * @returns {JSX.Element|null}
 */
export default function Output({ output }) {
	return output ? (
		<p dangerouslySetInnerHTML={{ __html: output }}></p>
	) : (
		<></>
	);
}
