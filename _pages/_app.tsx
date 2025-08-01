import "../styles/globals.css";

/**
 * Legacy pages router app wrapper component.
 * @param {Object} props
 * @param {React.ComponentType} props.Component
 * @param {Object} props.pageProps
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
