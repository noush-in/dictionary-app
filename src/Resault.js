/** @format */

import React from "react";
import Meaning from "./Meaning";

export default function Resault(props) {
	if (props.resaults) {
		return (
			<div className="Resault">
				<h2>{props.resaults.word}</h2>
        {props.resaults.meanings.map(function(meaning,index){
          return(
            <div key={index}>
              <Meaning meaning={meaning}/>
            </div>
          )
        })}
			</div>
		);
	} else {
		return null;
	}
}
