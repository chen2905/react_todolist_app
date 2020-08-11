import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import uuid from 'react-uuid'
class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'work',
        completed: false
      },
      {
        id: uuid(),
        title: 'rest',
        completed: true
      },
      {
        id: uuid(),
        title: 'study',
        completed: false
      }
    ]
  }
  //toggle check box
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  deleteTodo = (id) => {
    // console.log(id)
    this.setState(
      {
     
        todos: [...this.state.todos.filter(todo => todo.id != id)]
      }

    )
  }

addTodo =(title)=>{
  const newTodo={
    id:uuid(),
    title:title,
    completed:false
  }
  this.setState(
    {
    
      todos:[...this.state.todos,newTodo]
    }//NOTE: the spread operator is to make a copy of the state and then
    //we append the new to do to it
  )
}

  //custom defined the function cannot set in render funciton
  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
        <AddTodo addTodo={this.addTodo}/>
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        </div>
        
      </div>
    )
  }
}
export default App;
