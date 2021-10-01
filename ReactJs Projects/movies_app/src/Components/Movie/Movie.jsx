import React, { Component } from 'react';
import { IMAGE_BASE_URL } from '../../API/secret';
import "./Movie.css"
class Movie extends React.Component {
    render() {
        // let posterPath = IMAGE_BASE_URL + this.props.Movie["poster_path"]
        let { poster_path, title, vote_average } = this.props.Movie;
        return (
            <div className="MovieData">
                <div className="poster">
                    <img src={IMAGE_BASE_URL + poster_path} alt="something went wrong" />
                </div>

                <div className="MovieDetails">
                    <div className="title">
                        {title}
                    </div>

                    <div className="rating">
                        {vote_average}
                    </div>
                </div>
            </div>

        )
    }
}

export default Movie;