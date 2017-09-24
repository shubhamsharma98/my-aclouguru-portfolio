import React from 'react';

class NameInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: {
				type: undefined,
				body: undefined
			}
		}
		this.buttonClicked = this.buttonClicked.bind(this);
	}	

	buttonClicked(event) {
		let name = this.refs.nameInput.value;

		this.setState({
			message: {
				type: name ? 'success' : 'error', //if name has a value put success otherwise put error
				body: name ? 'Hello, ' + name + '!' : 'Please enter a valid name.'
			}
		});

	}

	render() {
		let msg = this.state.message;
		return (
			<div>
				<label>Name: <input ref="nameInput" type="text" /></label>
				<button id="inputButton" onClick={this.buttonClicked}>ClickMe</button>
				<MessageBox type={msg.type} message1={msg.body}/>
			</div>
		)
	}
} //NameInput:classEND

class MessageBox extends React.Component {
	render() {
		return (
			<div className={"messageBox " + (this.props.type || "hidden")}>
				{this.props.message1}
			</div>
		)
	}
} //MessageBox:classEND

ReactDOM.render(<NameInput />, document.getElementById('content')); 