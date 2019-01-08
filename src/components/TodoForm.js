import React, { Component } from 'react';

class TodoForm extends Component {
  state = { name: '' }

  render() {
    return
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={this.handleSubmit}>
        <input value={name} name='name' onChange={this.handleChange} />
      </form>
    </div>
  }
}

export default TodoForm;