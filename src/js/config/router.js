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
  .state('profile', {
  url: '/user/:id',
  templateUrl: 'js/views/users/show.html',
  controller: 'ProfileCtrl as profile'
  })
  .state('editProfile', {
    url: '/user/:id/edit',
    templateUrl: 'js/views/users/edit.html',
    controller: 'EditCtrl as editProfile'
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
