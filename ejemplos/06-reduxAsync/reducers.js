import { REQUEST_POST, RECEIVE_POST, FAILED_TO_FETCH } from './actions';

function avatar(state = {
  isFetching: false,
  imagenes: [],
}, action) {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        imagenes: [...state.imagenes, {
          title: action.title,
          url: action.url,
          receivedAt: action.receivedAt,
        }],
      });
    case FAILED_TO_FETCH:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.err,
      });
    default:
      return state;
  }
}


export default avatar;
