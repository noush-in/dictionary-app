import React ,{useState} from "react";
import "./Dictionary.css"


export default function Dictionary(){
  let[keyword , setKeyword]=useState("");

function search(event){
  event.preventDefault();
  alert(`seraching for ${keyword}` );
}
function handleChange(event){
  setKeyword(event.target.value);
}


  return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" onChange={handleChange} />
			</form>
		</div>
	);
}