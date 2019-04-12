import { AppController } from "./app.controller";
import './app.styles.scss';

export const AppComponent = {
  selector: 'app',
  template: require(`./app.template.html`),
  controller: AppController
};
