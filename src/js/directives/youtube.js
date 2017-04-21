angular.module('fundraiser')
  .directive('youtube', youtube);

youtube.$inject = ['youtubeService'];
function youtube(youtubeService) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      videoId: '=',
      width: '@',
      height: '@'
    },
    template: '<iframe width="100%" height="100%" src="{{ src }}" frameborder="0" allowfullscreen></iframe>',
    link($scope) {
      console.log($scope.videoId);
      $scope.src = `https://www.youtube.com/embed/${$scope.videoId}`;
    }
  };
}
