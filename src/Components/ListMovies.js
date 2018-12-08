import React, { Component } from 'react';

import Movie from './Movie';

class ListMovie extends Component {

  renderMovieDetail(movieDetail) {
    return <Movie key={movieDetail.id} movieDetail={movieDetail} />;
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
