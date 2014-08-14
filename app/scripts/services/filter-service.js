'use strict';

angular.module('sywhackImgeditorApp')
  .service("filterService", function() {
  	this.applyFilters = function()	{
  		Caman('#img-to-edit', function () {
  			this.brightness(10);
		    this.contrast(50);
		    this.sepia(50);
		    this.saturation(50);
		    this.render();
	  	});
  	};
  });