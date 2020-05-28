import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "The Shawshank Redemption",
        genre: "Drama",
        rating: "9.3",
      },
      {
        id: 2,
        name: "The Godfather",
        genre: "Crime, Drama",
        rating: "9.2",
      },
      {
        id: 3,
        name: "The Dark Knight",
        genre: "Action, Crime, Drama",
        rating: "9.0",
      },
      {
        id: 4,
        name: "The Lord of the Rings: The Return of the King",
        genre: "Adventure, Drama, Fantasy",
        rating: "8.9",
      },
    ],
  };

  deleteMovie = (id) => {
    const { movies } = this.state;

    const newMovies = movies.filter((movie) => movie.id !== id);

    this.setState({
      movies: newMovies,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            deleteClickHandler={this.deleteMovie.bind(this, movie.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Movies;
