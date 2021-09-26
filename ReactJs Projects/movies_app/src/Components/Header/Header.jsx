import React, { Component } from 'react';
class Header extends React.Component {
    state = {
        toSearch : ""
    }


    handleOnChange = (e) =>{
        let updatedToSearch = e.target.value;
        // console.log(updatedToSearch);
        this.setState({
            toSearch : updatedToSearch
        })
    }

    handelKeyPress = (e) =>{
        if(e.key == "Enter"){
            this.props.setMoviesOnSearch(this.state.toSearch);
        }
    }

    render() { 
         let handleOnChange = this.handleOnChange;
         let handelKeyPress = this.handelKeyPress;
        return <div>
            <input type="text" value = {this.state.toSearch} placeholder = "search" onChange = {handleOnChange} onKeyPress = {handelKeyPress}/>
        </div>;
    }
}
 
export default Header;