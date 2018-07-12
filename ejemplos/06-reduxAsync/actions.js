import fetch from 'isomorphic-fetch';

export const REQUEST_POST = 'REQUEST_POST';

export function requestPost(number, size) {
  return {
    type: REQUEST_POST,
    number,
    size,
  };
}

export const RECEIVE_POST = 'RECEIVE_POST';

export function receivePost(number, post) {
  return {
    type: RECEIVE_POST,
    title: post.title,
    url: post.url,
    receivedAt: Date.now(),
  };
}

export const FAILED_TO_FETCH = 'FAILED_TO_FETCH';

export function failedToFetch(err) {
  return {
    type: FAILED_TO_FETCH,
    err,
  };
}

export function fetchPost(number) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPost(number));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://jsonplaceholder.typicode.com/photos/${number}`)
      .then(response => response.json())
      .then(data => dispatch(receivePost(number, data)))
      .catch(err => dispatch(failedToFetch(err)));
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}
