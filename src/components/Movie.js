import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  state = {
    showMovieInfo: false,
  };

  onShowClick = (e) => {
    this.setState({
      showMovieInfo: !this.state.showMovieInfo,
    });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, genre, rating } = this.props.movie;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            onClick={this.onDeleteClick}
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right" }}
          ></i>
        </h4>
        {this.state.showMovieInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Genre: {genre}</li>
            <li className="list-group-item">Rating: {rating}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Movie.proptype = {
  movie: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Movie;
