import React, { Component } from 'react';

class Movie extends Component {
  renderUserFavorite(user) {
    return <li key={user.id}>{user.name}</li>
  }

  renderUsersFavorite(users) {
    if (users.length > 0) {
      return (
        <div className='movie-users-favorite'>
          <p>Linked By:</p>
          <ul>
            {users.map(user => this.renderUserFavorite(user))}
          </ul>
        </div>
      );
    } else {
      return <p>None of the current users liked this movie</p>;
    }
  }

  render() {
    const { movie, usersFavorite } = this.props.movieDetail;

    return (
      <div className='movie-detail'>
        <h2>{movie.name}</h2>
        {this.renderUsersFavorite(usersFavorite)}
      </div>
    );
  }
}

export default Movie;
