import './fresh-movie.directive.scss';

export function FreshMovieDirective() {
  return {
    name: 'freshMovie',
    restrict: 'A',
    replace: false,
    link: {
      post($scope, $element, /* $attrs */) {
        if (Boolean($scope.movie)) {
          const releaseYear = new Date($scope.movie.release_date).getFullYear();
          if (releaseYear - new Date().getFullYear() >= 0) {
            $element[0].classList.add('movie--fresh');
          } else {
            $element[0].classList.remove('movie--fresh');
          }
        }
      }
    }
  };
}
