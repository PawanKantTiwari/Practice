import React, { Component } from 'react'

class TodosList extends React.Component {
    state = {};
    
    // cbFunForMapping = function(todoObj){
    //     return(
    //         <div key = {todoObj.id} className = "todo">
    //             <div>{todoObj.todo}</div>
    //             <button className = "btn btn-danger">Delete</button>
    //         </div>
    //     )
    // }


    render() {
        let todosList = this.props.todosListAsProps;
        let deleteTodo = this.props.deleteTodoAsProp;
        // let cbFunForMapping = this.cbFunForMapping;
        return (
            <div className="todosMapping">
                {
                    // todosList.map(cbFunForMapping)

                    todosList.map(function (todoObj) {
                        return (
                            <div key={todoObj.id} className="todo">
                                <div>{todoObj.todo}</div>
                                <button onClick = {(e) => {deleteTodo(todoObj.id)}} className="btn btn-danger">Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}

export default TodosList;
