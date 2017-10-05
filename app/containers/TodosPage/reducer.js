/*
 *
 * Todos reducer
 *
 */

import { fromJS } from 'immutable';
import { fetchTodos } from './routines';

const initialState = fromJS({
  todos: [],
});

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case fetchTodos.SUCCESS:
      return state.setIn('todos', action.payload);
    default:
      return state;
  }
}

export default todosReducer;
