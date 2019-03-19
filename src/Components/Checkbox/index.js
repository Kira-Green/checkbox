import React, { Component } from "react";

class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkValue: false
		};
	}
	handleChange = () => {
		this.setState(state => ({
			checkValue: !this.state.checkValue
		}));
	};

	render() {
		return (
			<div className="App">
				<input
					type="checkbox"
					checked={this.state.checkValue}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default Checkbox;
