import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <div>
    <h1>Todo List</h1>
    <ul>
      { todos.map( (t) => {
          return (
            <li key={t.id}>
              {t.name}
            </li>
          )
        })
      }
    </ul>
  </div>
)

const mapStoreToProps = (store) => {
  return { todos: store.todos }
}

export default connect(mapStoreToProps)(TodoList);