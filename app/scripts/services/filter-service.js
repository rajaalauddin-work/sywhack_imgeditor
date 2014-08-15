'use strict';

angular.module('sywhackImgeditorApp')
  .service("filterService", function() {
  	this.applyFilters = function(value)	{
  		Caman('#mainCanvas', function () {
  			this.brightness(value);
		    //this.contrast(50);
		    //this.sepia(50);
		    //this.saturation(50);
		    this.render();
	  	});
  	};

  	this.applyFilter = function(filterId, sliderValue, actualValue) {
  		
  		var value = sliderValue - actualValue;
  		console.log(value);
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

  		return value;
  	};
  });