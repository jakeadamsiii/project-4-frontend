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
  .state('projectsIndex', {
    url: '/projects',
    templateUrl: '/js/views/projects/index.html',
    controller: 'ProjectsIndexCtrl as projectsIndex'
  })
  .state('projectsNew', {
    url: '/projects/new',
    templateUrl: 'js/views/projects/new.html',
    controller: 'ProjectsNewCtrl as projectsNew'
  })
  .state('projectsShow', {
    url: '/projects/:id',
    templateUrl: 'js/views/projects/show.html',
    controller: 'ProjectsShowCtrl as projectsShow'
  })
  .state('projectsEdit', {
    url: '/projects/:id/edit',
    templateUrl: 'js/views/projects/edit.html',
    controller: 'ProjectsEditCtrl as projectsEdit'
  })
  .state('payment', {
    url: '/projects/:id/payment',
    templateUrl: 'js/views/projects/payment.html',
    controller: 'PaymentController as payment'
  })
  .state('profile', {
  url: '/user/:id',
  templateUrl: 'js/views/users/show.html',
  controller: 'ProfileCtrl as profile'
  })
  .state('profileEdit', {
    url: '/user/:id/edit',
    templateUrl: 'js/views/users/edit.html',
    controller: 'EditCtrl as profile'
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
