// los reducers reciben dos inputs
// 1. una accion
// 2. una copia del estado actual
// y devuelve un nuevo estado

//Reducers Composition
function postComments( state = [], action) {
	switch(action.type){
		case 'ADD_COMMENT':
			// retornar el estado actual más el nuevo comentario.
			return [...state, {
				user: action.author,
				text: action.comment
			}]
		case 'REMOVE_COMMENT':
			// retornamos el estado pero sin ese comentario
			return [
				...state.slice(0, action.i),
				...state.slice(action.i+1)
			];
		default:
			return state;
	}
}

function comments( state = [], action) {
	if(typeof action.postId !== undefined){
		return{
			// estado actual
			...state,
			// sobreescribir el estado con un post nuevo
			[action.postId]: postComments(state[action.postId], action)
		}
	}
}
export default comments;