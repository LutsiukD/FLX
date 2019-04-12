export class MovieInfoController {
  constructor($stateParams, moviesService) {
    'ngInject';

    this.moviesService = moviesService;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.moviesService.findMovieById(this.$stateParams.movieId).then((movie) => {
      this.movie = movie;
    });
  }
}
