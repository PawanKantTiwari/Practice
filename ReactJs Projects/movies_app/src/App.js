import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import { API_KEY, API_URL, IMAGE_BASE_URL } from './API/secret';
import axios from "axios"

class App extends React.Component {
  state = {
    MoviesData: [],
    CurrentMovieName: "avengers"
  }




 async componentDidMount() {
    let data = await axios.get(API_URL + '/search/movie', { params: { api_key: API_KEY, query: this.state.CurrentMovieName, page: 1 } })

      let MoviesData = data.data.results;
      this.setState({
        MoviesData : MoviesData
      })
    }

    setMoviesOnSearch = async (toSearch) =>{
    let data = await axios.get(API_URL + '/search/movie', { params: { api_key: API_KEY, query: toSearch, page: 1 } })

    let MoviesData = data.data.results;
    this.setState({
      MoviesData : MoviesData,
      CurrentMovieName : toSearch
    })
  }



  render() {

    let setMoviesOnSearch = this.setMoviesOnSearch;
    return <div className="total">
      <Header setMoviesOnSearch = {setMoviesOnSearch}></Header>
      <Movies MoviesData={this.state.MoviesData}></Movies>
    </div>;
  }
}

export default App;