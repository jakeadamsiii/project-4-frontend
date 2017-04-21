angular.module('fundraiser')
  .service('youtubeService', youtubeService);

function youtubeService() {
   function getCode(url) {
      console.log('URL', url);
      let code = null;
      const match = url.match(/\?v=(.*)/);

      if(match) code = match[1];
      else code = url.split('/').splice(-1)[0];
      return code;
    }

  this.getCode = getCode;
}
