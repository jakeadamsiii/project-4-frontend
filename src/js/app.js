angular
  .module('fundraiser', ['ui.router', 'ngResource', 'satellizer', 'checklist-model', 'ui.bootstrap'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(Auth);

  Auth.$inject = ['$authProvider', 'API_URL'];
  function Auth($authProvider, API_URL) {
    $authProvider.signupUrl = `${API_URL}/register`;
    $authProvider.loginUrl = `${API_URL}/login`;

    $authProvider.github({
      clientId: '8ecee042089156538157',
      url: `${API_URL}/oauth/github`
    });
  }
//
// AuthCtrl.$inject = ['$auth'];
// function AuthCtrl($auth) {
//   const vm = this;
//
//   function register() {
//     $auth.signup(vm.user)
//       .then(user => console.log(user));
//   }
//
//   vm.register = register;
//
//   function login() {
//     $auth.login(vm.credentials)
//       .then(user => console.log(user));
//   }
//
//   vm.login = login;
//
//   function authenticate(provider) {
//   $auth.authenticate(provider)
//     .then(user => console.log(user));
// }
//
// vm.authenticate = authenticate;
// }
