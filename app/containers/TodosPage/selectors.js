import { createSelector } from 'reselect';

/**
 * Direct selector to the todos state domain
 */
const selectTodosDomain = () => (state) => state.get('todos');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Todos
 */

const makeSelectTodosPage = () => createSelector(
  selectTodosDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTodosPage;
export {
  selectTodosDomain,
};
