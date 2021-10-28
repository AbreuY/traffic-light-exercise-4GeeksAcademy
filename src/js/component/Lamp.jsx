import React from "react";
import PropTypes from "prop-types";

export const Lamp = props => {
	return (
		<div
			className={`${props.color} ${
				props.color == props.selected ? "light" : ""
			}`}
			/* onClick={e => {
				props.setSelected(
					props.color == props.selected ? undefined : props.color
				);
			}} */
			{...props}></div>
	);
};

Lamp.propTypes = {
	color: PropTypes.string,
	selected: PropTypes.string,
	setSelected: PropTypes.func
};
