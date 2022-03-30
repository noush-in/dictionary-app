/** @format */

import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [result, setResult] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let[photos ,setPhotos]=useState(null);

function handlePexelsResponse(response){
	setPhotos(response.data.photos);
}

	function handleDictionaryResponse(response) {
		setResult(response.data[0]);
	}
	function search() {
		// documentation : https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);
		let pexelsApiKey ="563492ad6f91700001000001d243ec79a4084f60a66fede7dd56e977";
		const headers = { Authorization: `Bearer ${pexelsApiKey}` };
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		axios.get(pexelsApiUrl , {headers:headers}).then(handlePexelsResponse);

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
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "loading...";
	}
}
