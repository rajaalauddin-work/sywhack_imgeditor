'use strict';

angular.module('sywhackImgeditorApp')
  .service("filterService", function() {
  	this.applyFilters = function(value)	{
  		Caman('#mainCanvas', function () {
  			this.brightness(value);
  			console.log(this.brightness());
		    //this.contrast(50);
		    //this.sepia(50);
		    //this.saturation(50);
		    this.render();
	  	});
  	};

  	this.applyFilter = function(filterId, offset) {
  		
  		/*var value=10;
  		if(sliderValue<actualValue){
  			value=-10;
  		}

  		console.log("Slider "+sliderValue +" Actual " +actualValue);
  		console.log(value);*/
  		switch(filterId){
  			case "brightness": 
				Caman('#mainCanvas', function () {
		  			this.brightness(offset);
		  			//console.log(this.brightness());
				    this.render();
			  	});
  			break;
  			case "contrast": 
  				Caman('#mainCanvas', function () {
		  			this.contrast(offset);
				    this.render();
			  	});
  			break;
  			case "sepia": 
  				Caman('#mainCanvas', function () {
		  			this.sepia(offset);
				    this.render();
			  	});
  			break;
  			case "saturation": 
  				Caman('#mainCanvas', function () {
		  			this.saturation(offset);
				    this.render();
			  	});
  			break;
  			default: 
  				Caman('#mainCanvas', function () {
	  			 	this.render();
			  	});	
  			break;
  		}

  		//return sliderValue;
  	};
  });