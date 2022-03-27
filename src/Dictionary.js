/** @format */

import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [result, setResult] = useState(null);
	let [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResult(response.data[0]);
	}
	function search() {
		// documentation : https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function handleChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
				<h1>What word do you want to look up?</h1>
					<form onSubmit={handleSubmit}>
						<input type="search" onChange={handleChange}  defaultValue={props.defaultKeyword}/>
					</form>
				</section>
				<Result results={result} />
			</div>
		);
	} else {
		load();
		return "loading...";
	}
}
