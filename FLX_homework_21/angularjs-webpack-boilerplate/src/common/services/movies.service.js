import * as moviesMock from "../../../mocks/movies.json";

export class MoviesService {
  constructor($http) {
    this.$http = $http;
  }

  findMovieById(id) {
    return Promise.resolve(moviesMock.data.find(element => Number(element.id) === Number(id)));
  }

  getAllMovies() {
    return Promise.resolve(moviesMock.data);
  }
}

MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];
