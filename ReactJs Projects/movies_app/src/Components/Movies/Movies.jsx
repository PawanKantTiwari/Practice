import React, { Component } from 'react';
import Movie from '../Movie/Movie';

class Movies extends React.Component {
    state = {

    }

    

    render() { 
        return (
            <React.Fragment >
                {
                    this.props.MoviesData.map((MovieObj) =>{
                        return <Movie Movie = {MovieObj}></Movie>
                    }) 
                }
            </React.Fragment>
        )
    }
}
 
export default Movies;