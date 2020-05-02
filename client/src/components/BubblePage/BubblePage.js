import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../../Auth/AxiosWithAuth";

import Bubbles from "../Bubbles";
import ColorList from "../ColorList";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property
	const [message, setMessage] = useState("");

	useEffect(() => {
		AxiosWithAuth()
			.get("http://localhost:5000/api/colors")
			.then((res) => setColorList(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;