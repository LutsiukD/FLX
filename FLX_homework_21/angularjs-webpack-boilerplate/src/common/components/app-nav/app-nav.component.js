import { AppNavController } from "./app-nav.controller";
import './app-nav.component.scss';

export const AppNavComponent = {
  selector: 'appNav',
  bindings: {
    user: '<',
    onLogout: '&',
    buttonTitle: '@'
  },
  template: require(`./app-nav.template.html`),
  controller: AppNavController
};
