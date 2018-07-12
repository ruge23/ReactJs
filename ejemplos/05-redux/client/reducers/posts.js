// los reducers reciben dos inputs
// 1. una accion
// 2. una copia del estado actual
// y devuelve un nuevo estado


// Tienen que ser funciones puras.
// Si tenemos una foto que tiene 10 likes, pasada por esta función, siempre tienen que devolver once likes.
// Si la llamamos muchas veces (con los mismos inputs) y nos da un resultado diferente, entonces no es pura.

function posts( state = [], action) {
	switch(action.type){
		case 'INCREMENT_LIKES':
			console.log('increment Likes');
			const i = action.index;
			return [
				...state.slice(0,i), // antes del que estamos actualizando
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1)// despues del actualizado
			]
		default:
			return state;
		
	}
}

export default posts;