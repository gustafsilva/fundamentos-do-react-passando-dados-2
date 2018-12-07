const getUsersWhoHaveFavoritesTheMovie = (profiles, users, movieId) => {
  const usersFavorite = profiles.filter(profile => profile.favoriteMovieID === movieId)
    .map(profile => {
      let user = users[profile.userID]
      
      user.profileID = profile.id;
      return user;
    });

  return usersFavorite;
}

export const getMoviesDetails = (profiles, users, movies) => {
  const idsMovies = Object.keys(movies);

  const moviesDetails = idsMovies.map(idMovie => {
    const movie = movies[idMovie];
    const usersFavorite = getUsersWhoHaveFavoritesTheMovie(profiles, users, idMovie);

    return { movie, usersFavorite };
  });

  return moviesDetails;
}
