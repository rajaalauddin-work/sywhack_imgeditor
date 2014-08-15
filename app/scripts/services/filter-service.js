'use strict';

angular.module('sywhackImgeditorApp')
  .service("filterService", function() {
  	this.applyFilters = function()	{
  		Caman('#mainCanvas', function () {
  			this.brightness(10);
		    this.contrast(50);
		    this.sepia(50);
		    this.saturation(50);
		    this.render();
	  	});
  	};

  	this.applyFilter = function(filterId, value) {
  		//alert('Apply '+filterId+" "+value);
  		switch(filterId){
  			case "brightness": 
				Caman('#mainCanvas', function () {
		  			this.brightness(value);
				    this.render();
			  	});
  			break;
  			case "contrast": 
  				Caman('#mainCanvas', function () {
		  			this.contrast(value);
				    this.render();
			  	});
  			break;
  			case "sepia": 
  				Caman('#mainCanvas', function () {
		  			this.sepia(value);
				    this.render();
			  	});
  			break;
  			case "saturation": 
  				Caman('#mainCanvas', function () {
		  			this.saturation(value);
				    this.render();
			  	});
  			break;
  			default: 
  				Caman('#mainCanvas', function () {
	  			 	this.render();
			  	});	
  			break;
  		}
  	};
  });