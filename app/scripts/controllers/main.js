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

  $scope.$watch('mainImageData', function(newVal, oldVal) {
  	if(newVal != '') {
  		drawImage(newVal); 
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
			id: 'brightness'
		},
		{
			name: 'Contrast',
			id: 'contrast'
		},
		{
			name: 'Sepia',
			id: 'sepia'
		},
		{
			name: 'Saturation',
			id: 'saturation'
		}
	];  
	cropService.enableCrop();

	function drawImage(imgData) {
		var canvas = document.getElementById('mainCanvas');
		var ctx = canvas.getContext('2d');
  	var img = new Image();

	  img.onload = function(){
	  		
	  		$('#mainCanvas').attr('width', this.width);
	  		$('#mainCanvas').attr('height', this.height);
	  		
	      ctx.drawImage(img,0, 0, this.width,this.height);
	  };

		img.src = imgData;

  }
}]);

