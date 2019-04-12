import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularLoadingBar from 'angular-loading-bar';

// modules
import { CommonModule } from './common/common.module';

// components
import { AppComponent } from './app.component';
import { MovieInfoComponent } from "./common/components/movie-info/movie-info.component";

// services
import { MoviesService } from "./common/services/movies.service";

const MODULE_NAME = 'app-root';
const MODULE_IMPORTS = [
  uiRouter,
  angularLoadingBar,
  CommonModule
];

const _app = angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(AppComponent.selector, AppComponent)
  .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state(AppComponent.selector, {
        url: `/`,
        component: AppComponent.selector,
        data: {
          requiredAuth: true
        }
      })
      .state({
        name: MovieInfoComponent.selector,
        url: '/movie/{movieId}',
        template: MovieInfoComponent.template,
        controller: MovieInfoComponent.controller,
        controllerAs: '$ctrl',
        resolve: {
          movie: [MoviesService.serviceName, '$stateParams', function(moviesService, $stateParams) {
            return moviesService.findMovieById($stateParams.movieId);
          }]
        }
      });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  })
  .value('EventEmitter', payload => ({ $event: payload }))
  .run(($transitions, cfpLoadingBar) => {
    'ngInject';

    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  })
  .name;
