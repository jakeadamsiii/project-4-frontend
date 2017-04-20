angular
  .module('fundraiser')
  .factory('Donation', Donation);

Donation.$inject = ['$resource', 'API_URL'];
function Donation($resource, API_URL){
  return new $resource(`${API_URL}/donations/:id`, { id: '@id'}, {
    update: {method: 'PUT'}
  });
}
