import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
// import uuid from 'uuid';
import axios from 'axios';

class MainContent extends Component {
   state = {
     todos: []
   }

   componentDidMount() {
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .then(res => this.setState({ todos: res.data }))
   }
   //Toggle complete
   markComplete = (id) => {
     this.setState({ todos: this.state.todos.map(todo => {
       if(todo.id === id) {
         todo.completed = !todo.completed
       }
       return todo;
     })})
   }
   // Delete Todo
   onDelete = (id) => {
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(res => this.setState({
       todos: [...this.state.todos.filter(todo => todo.id !==
         id)]
     })
     )
      
    }

    // Add Todo
    addTodo = (title) => {
      // const newTodo = {
      //   id: uuid.v4(),
      //   title,
      //   completed: false
      // }
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));
    }

  render() { 
    return ( 
      <main>
        < AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} onDelete={this.onDelete}/>
      </main>
     );
  }
}
 
export default MainContent; 