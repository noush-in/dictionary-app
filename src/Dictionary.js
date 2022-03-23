/** @format */

import React, { useState } from "react";
import axios from "axios";
import Resault from "./Resault";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [resault, setResault] = useState(null);

	function handleResponse(response) {
    setResault(response.data[0]);
	}

	function search(event) {
		event.preventDefault();
		// documentation : https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" onChange={handleChange} />
			</form>
			<Resault resaults={resault}/>
		</div>
	);
}
