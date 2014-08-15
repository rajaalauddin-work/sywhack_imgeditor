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
  $scope.showCropPanel = false;
  $scope.origImageData = '';

  $scope.$watch('mainImageData', function(newVal, oldVal) {

  	if(newVal != '' && oldVal != '') {
  		drawImage(newVal, true); 
  	} else if(newVal != '') {
  		drawImage(newVal, false)
  	}
  });

  $scope.applyFilters = function(value){
    	filterService.applyFilters(value);	    	
	};

	$scope.applyFilter = function(filterId, offset, index) {
		filterService.applyFilter(filterId, offset);
		$scope.filters[index].actualValue = $scope.filters[index].sliderValue;
	};

	$scope.resetFilters = function(){
		if($scope.filters){
			for(var i=0; $scope.filters.length; i++){
				$scope.filters[i].sliderValue = 0;
				$scope.filters[i].actualValue = 0;			
			}
		}
	};
	
	$scope.applyPreset = function(presetId) {
		filterService.applyPreset(presetId);		
	};

	$scope.filters = [
		{
			name: 'Brightness',
			id: 'brightness',
			sliderValue: 0,
			actualValue: 0
		},
		{
			name: 'Contrast',
			id: 'contrast',
			sliderValue: 0,
			actualValue: 0
		},
		{
			name: 'Saturation',
			id: 'saturation',
			sliderValue: 0,
			actualValue: 0
		}
	];  

	$scope.presets = [
		{
			id: 'sepia',
			name: 'Sepia'			
		},
		{
			id: 'vintage',
			name: 'Vintage'			
		},
		{
			id: 'sunrise',
			name: 'Sunrise'			
		},
		{
			id: 'sinCity',
			name: 'Sin City'			
		},
		{
			id: 'nostalgia',
			name: 'Nostalgia'			
		}
	];

	$scope.enableCropping = function() {
		cropService.enableCrop();
		$scope.showCropPanel = true;
	}

	$scope.performCrop = function() {
		cropService.performCrop();
		$scope.showCropPanel = false;
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
		reInitCaman();
		$scope.resetFilters();
	}

	var reInitCaman = function() {
		Caman("#mainCanvas", function(){
			this.reset();
		});
	};

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

