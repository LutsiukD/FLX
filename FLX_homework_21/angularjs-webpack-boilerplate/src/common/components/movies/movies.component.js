import { MoviesController } from "./movies.controller";
import './movies.component.scss';

export const MoviesComponent = {
  selector: 'movies',
  bindings: {
    movies: '<'
  },
  template: require(`./movies.template.html`),
  controller: MoviesController
};
