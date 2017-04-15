angular
  .module('fundraiser', ['satellizer'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(Auth)
  .controller('LoginCtrl', LoginCtrl);

  Auth.$inject = ['$authProvider', 'API_URL'];
  function Auth($authProvider, API_URL) {
    $authProvider.signupUrl = `${API_URL}/register`;
    $authProvider.loginUrl = `${API_URL}/login`;

    $authProvider.github({
      clientId: '',
      url: `${API_URL}/oauth/github`
    });
  }

LoginCtrl.$inject = ['$auth'];
function LoginCtrl($auth) {
  const vm = this;

  function register() {
    $auth.signup(vm.user)
      .then(user => console.log(user));
  }

  vm.register = register;

  function login() {
    $auth.login(vm.credentials)
      .then(user => console.log(user));
  }

  vm.login = login;

  function authenticate(provider) {
  $auth.authenticate(provider)
    .then(user => console.log(user));
}

vm.authenticate = authenticate;
}
