/**
 * @typedef {Object} UserDetail
 * 
 * @prop {String} profileID - id do Profile que conecta o Usuário que marcou o Filme como favorito.
 * @prop {Number} id - id do Usuário.
 * @prop {String} name - nome do Usuário.
 * @prop {String} userName - nickn do Usuário.
 */
/**
 * Obtém todos os Usuários que tem o filme passado como argumento como favorito.
 * 
 * @param {Array<Object>} profiles - array que liga um Usuário a um Filme.
 * @param {Object} users - objeto com todos os Usuários, a chave para acessar um Usuário é o ID do própio Usuário.
 * @param {Number} movieId - id do Filme para buscar Usuários que marcaram o Filme como Favorito.
 * 
 * @return {Array<UserDetail>} - array com todos os Usuários que marcaram o Filme como favorito.
 */
const getUsersWhoHaveFavoritesTheMovie = (profiles, users, movieId) => {
  const usersFavorite = profiles.filter(profile => profile.favoriteMovieID === movieId)
    .map(profile => {
      let user = users[profile.userID]
      
      user.profileID = profile.id;
      return user;
    });

  return usersFavorite;
}


/**
 * @typedef {Object} MovieDetail
 * 
 * @prop {Number} id - ID do Filme.
 * @prop {String} name - nome do Filme.
 * @prop {Array<UserDetail>} - array com todos os Usuários que marcaram o filme como favorito. 
 */
/**
 * Obtém detalhes de um Filme. Como todos os usuários que marcaram o Filme como favorito.
 * 
 * @param {Array<Object>} profiles - array que liga um Usuário a um Filme.
 * @param {Object} users - objeto com todos os Usuários, a chave para acessar um Usuário é o ID do próprio Usuário.
 * @param {Object} movies - objeto com todos os Filmes, a chave para acessar um Filme é o ID do próprio Filme
 * 
 * @return {Array<MovieDetail>} - array com Filmes com informações detalhadas.
 */
export const getMoviesDetails = (profiles, users, movies) => {
  const idsMovies = Object.keys(movies);

  const moviesDetails = idsMovies.map(idMovie => {
    const usersFavorite = getUsersWhoHaveFavoritesTheMovie(profiles, users, idMovie);

    return {
      ...movies[idMovie],
      usersFavorite
    };
  });

  return moviesDetails;
}
