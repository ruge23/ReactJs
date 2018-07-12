import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';

export default React.createClass({
	render: function(){
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[this.props.params.postId] || [];
		return (
			<div className='single-photo'>
				<Photo i={i} post={post} {...this.props}/>
				<Comments postComments = {postComments} {...this.props}/>
			</div>
		)
	}
})