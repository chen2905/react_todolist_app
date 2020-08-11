import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'
import uuid from 'react-uuid'
import axios from 'axios';
class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('todos?_limit=9')
      .then(
        //res=>console.log(res.data)
        res => {
          const todos = res.data.filter(data => data.userId == 1)
          this.setState(
            { todos: todos }
          )
        }
      )
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
    axios.delete(`todos/${id}`)
      .then(res => this.setState(
        {

          todos: [...this.state.todos.filter(todo => todo.id != id)]
        }
      )

      )
  }

  addTodo = (title) => {
    axios.post('todos', {
      title,
      completed: false
    }).then(res => this.setState(
      {

        todos: [...this.state.todos, res.data]
      })



      //NOTE: the spread operator is to make a copy of the state and then
      //we append the new to do to it
    )
  }

  //custom defined the function cannot set in render funciton
  render() {
    //console.log(this.state.todos)
    return (
      <Router><div className="App">
        <div className="container">

          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />


          <Route path="/about" component={About} />

        </div>
      </div></Router>

    )
  }
}
export default App;
