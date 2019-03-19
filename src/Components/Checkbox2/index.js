import React, { Component } from "react";

class Checkbox2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<div className="App">
				<input
					type="checkbox"
					checked={this.props.checked}
					onClick={this.props.handleChange}
				/>
			</div>
		);
	}
}

export default Checkbox2;
