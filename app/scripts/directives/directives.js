angular.module('sywhackImgeditorApp')
.directive("imgInputCustom", [ "utilityService", function(utilityService) {

	return {
		restrict: 'A',
		replace: true,
		scope: {
			imgData: '='
		},
		templateUrl: '../../templates/image-input.html',
		link: function(scope, element, attrs) {

			scope.openFileSelect = function() {
        
        element.find('input[type="file"]').trigger('click');
      }

      scope.onFileSelect = function(ev) {
        var index = scope.index;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            
          var image = new Image();
          image.onload = function(){
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.width = image.width;
            canvas.height = image.height;

            ctx.drawImage(image, 0, 0, image.width, image.height);
            if(ev.target.files[0].type == 'image/png') {
              scope.imgData = canvas.toDataURL('image/jpeg');
            } else if(ev.target.files[0].type == 'image/jpeg') {
              scope.imgData = canvas.toDataURL('image/jpeg');
            } else {
              scope.imgData = canvas.toDataURL('image/jpeg');
            }

            console.log(image.width);
            console.log(image.height);

            // get the resized version
            //$scope.step.previewImage = imgUtility.getResizedImage($scope.step.image, 138, 86);
            //scope.step.previewImage = scope.step.image;

            var inp = element.find('input[type="file"]');
            inp.replaceWith( inp = inp.clone( true ) );  
            
            scope.$apply();
        
          }

          image.src = event.target.result;
        }
        reader.readAsDataURL(ev.target.files[0]);
        
      }

      scope.openWebcam = function() {

      	navigator.getWebcam = (
				navigator.getUserMedia || 
				navigator.webkitGetUserMedia || 
				navigator.mozGetUserMedia ||
				navigator.msGetUserMedia );

				navigator.getWebcam(
					// constraint
					{ video: true, audio: false },
					// success callback
					gotWebcam,
					//error callback
					function(err) {
						console.log("Oops! Something not right." + err);
					}

				);

      }

			function gotWebcam(stream) {
				localVideo.src = window.URL.createObjectURL(stream);
				localVideo.play();

				// display some of the attributes of the MediaStream and MediaStreamTrack
				// first, reach into the mediastream object to access info about the mediaStreamTrack
				var video_track = stream.getVideoTracks()[0];

			}
		}
	}
}])
.directive('customOnChange', function() {

  return {
    restrict: "A",
    scope: {
        onChangeCb: '&'
    },
    link: function (scope, element, attrs) {

      //var onChangeFunc = element.scope()[attrs.customOnChange];
      var onChangeFunc = scope.onChangeCb;
      element.bind('change', function(ev) {
        scope.onChangeCb({'event': ev});
      });
    }
  };
});
	
