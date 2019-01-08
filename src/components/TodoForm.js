import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const { name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state
    const { dispatch, id } = this.props
    const todo = { name, id, complete: false }
    dispatch({ type: 'ADD_TODO', todo})
    dispatch({ type: 'INC_ID'})
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state
    return(
      <div>
        <h1>Todo Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={name} 
            name='name' 
            onChange={this.handleChange} 
          />
        </form>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return { id: store.nextId }
}

export default connect(mapStoreToProps)(TodoForm);