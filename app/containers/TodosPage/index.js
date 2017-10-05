/*
 *
 * Todos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTodosPage from './selectors';
import { fetchTodos } from './routines';

export class Todos extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    console.log('in componentDidMount');
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <p>
          {this.props.TodosPage.todos}
        </p>
      </div>
    );
  }
}

Todos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  TodosPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  TodosPage: makeSelectTodosPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos,
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
