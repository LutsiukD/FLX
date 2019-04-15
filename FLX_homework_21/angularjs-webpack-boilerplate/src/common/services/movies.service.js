// import * as moviesMock from "../../../mocks/movies.json";

export class MoviesService {
  constructor($http) {
    this.data = `https://reactjs-cdp.herokuapp.com/movies?limit=200&offset=1`;
    this.$http = $http;
    this.moviesMock;
  }

  findMovieById(id) {
    return this.$http
      .get(this.data)
      .then(
        res => res.data.data.find(element => Number(element.id) === Number(id)),
        err => console.log(err.status)
      );
  }

  getAllMovies() {
    return this.$http
      .get(this.data)
      .then(
        res => (this.moviesMock = res.data.data),
        err => console.log(err.status)
      );
  }
}

MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];
