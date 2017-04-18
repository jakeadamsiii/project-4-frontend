
Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;

  $authProvider.github({
    clientId: '8ecee042089156538157',
    url: `${API_URL}/oauth/github`
  });
}