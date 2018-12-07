import React, { Component } from 'react';

import Movie from './Movie';

class ListMovie extends Component {
  render () {
    const { movies } = this.props;

    return (
      <div className='list-movies'>
        {movies.map(movie => (
          <Movie movieDetail={movie} />
        ))}
      </div>
    );
  }
}

export default ListMovie;
