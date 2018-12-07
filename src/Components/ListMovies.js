import React, { Component } from 'react';

import Movie from './Movie';

class ListMovie extends Component {

  renderMovieDetail(movieDetail) {
    const { movie } = movieDetail;

    return <Movie key={movie.id} movieDetail={movieDetail} />;
  }

  render() {
    const { movies } = this.props;

    return (
      <div className='list-movies'>
        {movies.map(movieDetail => this.renderMovieDetail(movieDetail))}
      </div>
    );
  }
}

export default ListMovie;
