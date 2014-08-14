'use strict';

angular.module('sywhackImgeditorApp')
  .controller('MainCtrl', [ "$scope", "filterService", "cropService", "utilityService",
   function ($scope, filterService, cropService, utilityService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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
}]);

