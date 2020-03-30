import React from 'react'
import ReactDOM from 'react-dom'

// JSX as class
class Message extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello Everyone</h1>
			</div>
		)
	}
}

ReactDOM.render(<Message />, document.getElementById('root'))
