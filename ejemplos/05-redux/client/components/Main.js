import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render: function(){
		return (
			<div>
				<h1>
					<Link to="/">CopyGram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;