import React from "react";
import PropTypes from "prop-types";

export const Lamp = props => {
	const newProps = Object.assign({}, props);
	delete newProps.setSelected;
	return (
		<div
			className={`${newProps.color} ${
				newProps.color == newProps.selected ? "light" : ""
			}`}
			{...newProps}></div>
	);
};

Lamp.propTypes = {
	color: PropTypes.string,
	selected: PropTypes.string,
	setSelected: PropTypes.func
};
