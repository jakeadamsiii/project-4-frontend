angular
  .module('fundraiser')
  .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = ['User', '$auth', '$state'];
  function AuthCtrl(User, $auth, $state) {
    const vm = this;
    vm.user = {};

    function register() {
      $auth.signup(vm.user)
        .then(() => $state.go('login'));
    }

    vm.register = register;

    function login() {
      $auth.login(vm.credentials)
        .then(() => $state.go('landing'));
    }

    vm.login = login;

    function authenticate(provider) {
      $auth.authenticate(provider)
        .then(() => $state.go('landing'));
    }

    vm.authenticate = authenticate;


//   vm.user = {};
//
//   function usersCreate() {
//     // wrap the data in a `user` object
//     User
//       .save({ user: vm.user })
//       .$promise
//       .then(() => $state.go('usersIndex'));
//   }
//
//   vm.create = usersCreate;
// }

 }
