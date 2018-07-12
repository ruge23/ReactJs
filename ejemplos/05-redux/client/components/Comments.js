import React from 'react';

 const Comments = React.createClass({
 	renderComments: function(comment, i){
 		return (
 			<div className="comment" key={i}>
 				<p>
 					<strong>{comment.user}</strong>
 					{comment.text}
 					<button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.params.postId, i)}>&times;</button>
 				</p>
 			</div>
 		)
 	},
 	handleSubmit: function(event){
 		event.preventDefault();
 		const author = this.refs.author.value;
 		const comment = this.refs.comment.value;
 		const postId = this.props.params.postId;
 		this.props.addComment(postId, author, comment);
 		this.refs.commentForm.reset();

 	},
	render: function(){
		return (
			<div className='comment'>
				{this.props.postComments.map(this.renderComments)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
})

 export default Comments;