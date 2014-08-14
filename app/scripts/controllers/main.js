'use strict';

angular.module('sywhackImgeditorApp')
  .controller('MainCtrl', [ "$scope", "filterService", "cropService", function ($scope, filterService, cropService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.applyFilters = function(){
	    	filterService.applyFilters();	    	
		};

		cropService.enableCrop();
}]);

