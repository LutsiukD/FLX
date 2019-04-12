import { MovieInfoController } from "./movie-info.controller";
import './movie-info.component.scss';

export const MovieInfoComponent = {
  selector: 'movie-info',
  template: require(`./movie-info.template.html`),
  controller: MovieInfoController
};
