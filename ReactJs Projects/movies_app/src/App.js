import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import { API_KEY, API_URL, IMAGE_BASE_URL } from './API/secret';
import axios from "axios"

class App extends React.Component {
  state = {
    MoviesData: [],
    CurrentMovieName: "HULK"
  }




 async componentDidMount() {
    let data = await axios.get(API_URL + '/search/movie', { params: { api_key: API_KEY, query: this.state.CurrentMovieName, page: 1 } })

      let MoviesData = data.data.results;
      this.setState({
        MoviesData : MoviesData
      })
    }

  render() {
    return <React.Fragment>
      <Header></Header>
      <Movies MoviesData={this.state.MoviesData}></Movies>
    </React.Fragment>;
  }
}

export default App;