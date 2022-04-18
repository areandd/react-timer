import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
	let initialValue = "000000";
	let seconds = props.seconds.toString();
	let icon = <i className="far fa-clock"></i>;
	let results = (
		initialValue.split("").slice(seconds.length).join("") + seconds
	).split("");
	results.unshift(icon);

	return (
		<div className="BigCounter">
			{results.map((e, i) => {
				return <div key={i}> {e} </div>;
			})}
		</div>
	);
};

Counter.PropTypes = {
	seconds: PropTypes.string,
};
