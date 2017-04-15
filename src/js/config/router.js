angular
  .module('fundraiser')
  .config(Router);

Router.$inject=['$urlRouterProvider', '$locationProvider', '$stateProvider'];
function Router($urlRouterProvider, $locationProvider, $stateProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: '/js/views/index.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/auth/login.html',
    controller: 'AuthCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'js/views/auth/register.html',
    controller: 'AuthCtrl as login'
  });

  $urlRouterProvider.otherwise('/');
}
