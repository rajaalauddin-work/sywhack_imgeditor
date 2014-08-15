'use strict';

angular.module('sywhackImgeditorApp')
.controller('MainCtrl', [ "$scope", "filterService", "cropService", "utilityService",
function ($scope, filterService, cropService, utilityService) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.mainImageData = '';
  $scope.showVideo = false;
  $scope.showCanvas = false;
  $scope.origImageData = '';

  $scope.$watch('mainImageData', function(newVal, oldVal) {

  	if(newVal != '' && oldVal != '') {
  		drawImage(newVal, true); 
  	} else if(newVal != '') {
  		drawImage(newVal, false)
  	}
  });

  $scope.applyFilters = function(){
    	filterService.applyFilters();	    	
	};

	$scope.applyFilter = function(filterId, value) {
		filterService.applyFilter(filterId, value);
	};

	$scope.filters = [
		{
			name: 'Brightness',
			id: 'brightness',
			value: 0
		},
		{
			name: 'Contrast',
			id: 'contrast',
			value: 0
		},
		{
			name: 'Sepia',
			id: 'sepia',
			value: 0
		},
		{
			name: 'Saturation',
			id: 'saturation',
			value: 0
		}
	];  

	$scope.enableCropping = function() {
		cropService.enableCrop();
	}

	$scope.downloadImagePng = function() {

		var canvas = document.getElementById('mainCanvas');
		event.target.href = canvas.toDataURL("image/png")
	}

	$scope.downloadImageJpeg = function() {
		var canvas = document.getElementById('mainCanvas');
		event.target.href = canvas.toDataURL("image/jpeg")
	}

	$scope.resetImage = function() {
		drawImage($scope.origImageData, true);
	}

	function drawImage(imgData, clearCanvas) {

		var canvas = document.getElementById('mainCanvas');
		var ctx = canvas.getContext('2d');

		// save original image data
		$scope.origImageData = imgData;

		if(clearCanvas) {
			// destroy canvas, recreate a new one
			//$('#mainCanvas').remove();
			//var $cvs = $('<canvas></canvas>');
			//$cvs.attr('id', 'mainCanvas');
			//$('.img-holder').append($cvs);
			canvas.width = canvas.width;
		}

		// clear from previous image
		ctx.clearRect(0, 0, canvas.width, canvas.height);

  	var img = new Image();

	  img.onload = function(){
	  		
	  		$('#mainCanvas').attr('width', this.width);
	  		$('#mainCanvas').attr('height', this.height);
	  		
	      ctx.drawImage(img,0, 0, this.width,this.height);
	      $scope.showCanvas = true;
	  };

		img.src = imgData;

  }

}]);

