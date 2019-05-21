import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle  = () => {
  return {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none'   
  }
}

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
        {title}
        <input type="button" value="Delete" className="btn btn-danger btn-small m-2" onClick={this.props.onDelete.bind(this, id)} />
        </p>
     
      </div>
    )
  }
}

//  propTypes
TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }
export default TodoItem
