/** @format */

import Dictionary from "./Dictionary";
import "./App.css";

function App() {
	return (
		<div className="container">
			<div className="App">
				<main>
					<Dictionary defaultKeyword="sunset" />
				</main>
				<footer className="App-footer">
					Coded by{" "}
					<a
						href="https://www.linkedin.com/in/noushin-heidari-a04748121/"
						target="_blank"
						rel="noreferrer">
						Noushin Heidari
					</a>{" "}
					,it's open-sourced on{" "}
					<a
						href="https://github.com/noush-in/dictionary-app"
						target="_blank"
						rel="noreferrer">
						GitHub
					</a>{" "}
					, hosted on{" "}
					<a
						href="https://fanciful-toffee-798d3a.netlify.app/"
						target="_blank"
						rel="noreferrer">
						netlify.
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
