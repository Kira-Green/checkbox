import React, { Component } from "react";
import Checkbox from "../Checkbox";
import "./App.css";
import CheckboxArray from "../CheckboxArray";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<CheckboxArray />
			</div>
		);
	}
}

export default App;
