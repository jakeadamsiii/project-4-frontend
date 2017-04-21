/* global Stripe */
angular
  .module('fundraiser', ['ui.router', 'ngResource', 'satellizer', 'checklist-model', 'ui.bootstrap'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(Auth)
  .config(WhitelistSrc)
  .config(function() {
    Stripe.setPublishableKey('pk_test_m1RHjWD7EruzI8afxdLra4v9');
  });

  Auth.$inject = ['$authProvider', 'API_URL'];
  function Auth($authProvider, API_URL) {
    $authProvider.signupUrl = `${API_URL}/register`;
    $authProvider.loginUrl = `${API_URL}/login`;

    $authProvider.github({
      clientId: '8ecee042089156538157',
      url: `${API_URL}/oauth/github`
    });
  }

WhitelistSrc.$inject = ['$sceDelegateProvider'];
function WhitelistSrc($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
}
