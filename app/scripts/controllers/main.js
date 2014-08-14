'use strict';

angular.module('sywhackImgeditorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.applyFilters = function(){
    	debugger;
	    Caman('#img-to-edit', function () {
		    this.brightness(10);
		    this.contrast(30);
		    this.sepia(60);
		    this.saturation(-30);
		    this.render();
	  	});
	};

  });
