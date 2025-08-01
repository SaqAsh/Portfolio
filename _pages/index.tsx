import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";

/**
 * Legacy pages router index page component.
 * @returns {JSX.Element}
 */
export default function Home() {
	return (
		<div className={styles.container}>
			<h1>
				saqibashraf:${" "}
				<span className={styles.help}>type help to start</span>
			</h1>
			<Terminal />
		</div>
	);
}
