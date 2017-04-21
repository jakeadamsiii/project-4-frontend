
Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;

  $authProvider.github({
    clientId: '8ecee042089156538157',
    url: `${API_URL}/oauth/github`
  });

  $authProvider.facebook({
    // loginURL: 'https://www.facebook.com/v2.8/dialog/oauth',
    // accessTokenURL: 'https://graph.facebook.com/v2.8/oauth/access_token',
    // profileURL: '#',
    // clientId: process.env.RENTAPP_FB_CLIENT_ID,
    // clientSecret: process.env.RENTAPP_FB_CLIENT_SECRET,
    // scope: 'user:email'
    clientId: '717088768463178',
    url: `${API_URL}/oauth/facebook` 
  });
}
