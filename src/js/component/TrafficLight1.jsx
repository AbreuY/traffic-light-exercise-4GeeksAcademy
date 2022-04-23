import React from "react";
import { useState } from "react";
import { Lamp } from "./Lamp.jsx";

export const TrafficLight = props => {
	const [lamps, setLamps] = useState([
		{ isOn: false, color: "red" },
		{ isOn: false, color: "yellow" },
		{ isOn: false, color: "green" }
	]);
	const [selected, setSelected] = useState(undefined);
	return (
		<div className="verticalRectangle">
			{lamps.map((lamp, index) => {
				return (
					<Lamp
						key={index}
						color={lamp.color}
						selected={selected}
						setSelected={setSelected}
						onClick={e => {
							setSelected(
								lamp.color == selected ? undefined : lamp.color
							);
						}}
					/>
				);
			})}
		</div>
	);
};
