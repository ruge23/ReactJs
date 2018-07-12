import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo.js';

const PhotoGrid = React.createClass({
	render: function(){
		return (
			<div className = 'photo-grid'>
				{this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
			</div>
		)
	}
});

export default PhotoGrid;