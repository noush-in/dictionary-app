/** @format */

import React from "react";

export default function Phonetic(props) {
  console.log(props.Phonetic);
	return(
    <div className="Phonetic">
      {props.Phonetic.text}
      <br />
      <a href={props.phonetic.audio} target="_blank">Listen</a>
      </div>
    );
}
