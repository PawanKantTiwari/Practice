import React, { Component } from 'react';
import InputBox from './components/InputBox/InputBox';
import TodosList from './components/TodosList/TodosList';

class App extends React.Component {
  state = {
    todosList: [
    { id: "1", todo: "Html1" },
    { id: "2", todo: "Html2" },
    { id: "3", todo: "Html3" },
    { id: "4", todo: "Html4" },]
  }
  
  deleteTodo = (id) => {
     let updatedTodosList = this.state.todosList.filter(function(todoObj){
                  if(todoObj.id != id) return true;
                  else return false;
                })
      // console.log(updatedTodosList);

      this.setState({
        todosList : updatedTodosList,
      })
  }

  

  render() {
    let todosList = this.state.todosList;
    let deleteTodo = this.deleteTodo;
    return <div>
      <InputBox></InputBox>
      <TodosList todosListAsProps = {todosList} deleteTodoAsProp = {deleteTodo}></TodosList>
    </div>;
  }
}

export default App;
