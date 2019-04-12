import angular from 'angular';

// components
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieInfoComponent } from "./components/movie-info/movie-info.component";
import { FreshMovieDirective } from './directives/fresh-movie.directive';
import { MoviesService } from "./services/movies.service";

const MODULE_NAME = 'common';
const MODULE_IMPORTS = [];

export const CommonModule = angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(MovieInfoComponent.selector, MovieInfoComponent)
  .component(AppNavComponent.selector, AppNavComponent)
  .component(MoviesComponent.selector, MoviesComponent)
  .directive(FreshMovieDirective().name, FreshMovieDirective)
  .service(MoviesService.serviceName, MoviesService)
  .name;
