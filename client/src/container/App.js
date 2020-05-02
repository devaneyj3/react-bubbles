import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../components/LogIn/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import BubblePage from "../components/BubblePage";

function App() {
	return (
		<Router>
			<div className="container">
				<Route exact path="/" component={Login} />
				<PrivateRoute exact path="/bubble-page" component={BubblePage} />
			</div>
		</Router>
	);
}

export default App;
