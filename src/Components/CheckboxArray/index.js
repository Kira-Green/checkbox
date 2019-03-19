import React, { Component } from "react";
import Checkbox2 from "../Checkbox2";

class CheckboxArray extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ value: "Buy Groceries", checked: false },
				{ value: "Buy Milk", checked: false },
				{ value: "Walk Dog", checked: false },
				{ value: "Clean House", checked: false },
				{ value: "Wash car", checked: false },
				{ value: "Code stuff", checked: false }
			]
		};
	}
	handleChange = index => {
		this.setState(state => ({
			data: [
				...state.data.slice(0, index),
				{
					...state.data[index],
					checked: !state.data[index].checked
				},
				...state.data.slice(index + 1)
			]
		}));
	};

	render() {
		return (
			<div className="App">
				{this.state.data.map(({ value, checked }, index) => (
					<label>
						{value}
						<Checkbox2
							checked={checked}
							handleChange={() => this.handleChange(index)}
						/>
					</label>
				))}
			</div>
		);
	}
}

export default CheckboxArray;
