import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
	render() {
		return (
			<div>
        {/* guess this is decent, have like nothing to define */}
				<h1 style={{color: this.props.color}}>
					{this.props.msg}
				</h1>
				<p>I'll check back in {this.props.minutes} minutes</p>
			</div>
		)
	}
}

ReactDOM.render(
  // basic props
	<Message color="blue" msg="Test" minutes={100}/>, 
	document.getElementById('root')
)
