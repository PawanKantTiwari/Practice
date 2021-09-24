import React, { Component } from 'react';
import InputBox from './components/InputBox/InputBox';
import TodosList from './components/TodosList/TodosList';

class App extends React.Component {
  state = {
    todosList: [],
      counter : [0]
  }

  deleteTodo = (id) => {
    let updatedCounter = this.state.counter[0]-1;
    let updatedTodosList = this.state.todosList.filter(function (todoObj) {
      if (todoObj.id != id) return true;
      else return false;
    })

    this.setState({
      todosList: updatedTodosList,
      counter : [updatedCounter],
    })
  }


  addTodo = (todo) => {
    let updatedCounter = this.state.counter[0]+1;
    let updatedTodosList = [...this.state.todosList, { id:this.state.counter[0], todo: todo },
    ];

    this.setState(
      { 
        todosList: updatedTodosList ,
        counter : [updatedCounter],
      }
    )
  }


  render() {
    let todosList = this.state.todosList;
    let deleteTodo = this.deleteTodo;
    let addTodo = this.addTodo;
    return <div>
      <InputBox addTodoAsProp={addTodo}></InputBox>
      <TodosList todosListAsProps={todosList} deleteTodoAsProp={deleteTodo}></TodosList>
    </div>;
  }
}

export default App;
