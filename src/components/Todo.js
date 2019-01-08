import React from 'react'
import { connect } from 'react-redux'

const odo = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch({type: 'TOGGLGE_TODO', id})}
    style=
  >

  </li>
)

export default connect()(Todo);
