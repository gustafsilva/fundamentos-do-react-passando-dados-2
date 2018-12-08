import React, { Component } from 'react';

class Movie extends Component {
  renderUserFavorite(user) {
    return <li key={user.profileID}>{user.name}</li>
  }

  renderUsersFavorite(users) {
    if (users.length > 0) {
      return (
        <div className='movie-list-users-favorited'>
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
    const { movieDetail } = this.props;

    return (
      <div className='movie-detail'>
        <h2>{movieDetail.name}</h2>
        {this.renderUsersFavorite(movieDetail.usersFavorite)}
      </div>
    );
  }
}

export default Movie;
