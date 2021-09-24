import React, { Component } from 'react';
import "./InputBox.css";
class InputBox extends React.Component {

    state = {
        inputValue: "",
    }

    handleOnchange = (e) => {
        this.setState(
            { inputValue: e.target.value }
        )
    }

    handleAddTodo = () => {
        this.props.addTodoAsProp(this.state.inputValue);
        this.setState(
            { inputValue: "" }
        )
    }

    render() {
        let handleOnchange = this.handleOnchange;
        let addTodo = this.props.addTodoAsProp;
        let handleAddTodo = this.handleAddTodo;
        return (
            <div className="UpperContainer">
                <input type="text" value={this.state.inputValue} onChange={handleOnchange} />
                <button className="AddButton" onClick={handleAddTodo}>Add</button>
            </div>
        )
    }
}

export default InputBox;






































// // import React, { Component } from 'react'
// // class InputBox extends Component {
// //     state = {  }
// //     render() { 
// //         return ( 
// //             <>
// //                 <h1>Hello From InputBox</h1>
// //             </>
// //          );
// //     }
// // }

// // export default InputBox;