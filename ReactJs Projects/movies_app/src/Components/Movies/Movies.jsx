import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import "./Movies.css";

class Movies extends React.Component {
    state = {

    }



    render() {
        return (
            <React.Fragment >
                {
                    <div className="MoviesData">
                        {
                            this.props.MoviesData.map((MovieObj) => {
                                return <Movie Movie={MovieObj}></Movie>
                            })
                        }

                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Movies;