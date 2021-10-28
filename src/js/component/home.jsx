import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight1.jsx";

//create your first component

const Home = () => {
	const [selectRed, setSelectedRed] = useState(false);
	const [selectYellow, setSelectedYellow] = useState(false);
	const [selectGreen, setSelectedGreen] = useState(false);

	return (
		<TrafficLight />
		/* <div className="verticalRectangle">
			<div
				className={`red ${selectRed ? "light" : ""}`}
				onClick={e => {
					setSelectedRed(!selectRed);
					setSelectedYellow(false);
					setSelectedGreen(false);
				}}></div>
			<div
				className={`yellow ${selectYellow ? "light" : ""}`}
				onClick={e => {
					setSelectedYellow(!selectYellow);
					setSelectedRed(false);
					setSelectedGreen(false);
				}}></div>
			<div
				className={`green ${selectGreen ? "light" : ""}`}
				onClick={e => {
					setSelectedGreen(!selectGreen);
					setSelectedRed(false);
					setSelectedYellow(false);
				}}></div>
		</div> */
	);
};

export default Home;
