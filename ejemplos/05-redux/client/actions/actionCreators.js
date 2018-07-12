// incrementas likes
export function  increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}
// agregar comentarios
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}
// remover comentarios
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}
