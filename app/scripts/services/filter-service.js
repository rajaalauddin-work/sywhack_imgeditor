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
  		
      console.log(filterId);
      console.log(offset);
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
		  			this.render();
			  	});
  			break;
  			case "contrast": 
  				Caman('#mainCanvas', function () {
		  			this.contrast(offset);
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

  	this.applyPreset = function(presetId) {

  		var effect = $.trim(presetId);

	    Caman("#mainCanvas", function () {
	        // If such an effect exists, use it:
	        if( effect in this){
	            this[effect]();
	            this.render();
	        }
	    });

  		/*switch(presetId){
  			case "sepia": 
				Caman('#mainCanvas', function () {
		  			this.vignette(400);
					this.vignette("10%");
		  			this.render();
			  	});
  			break;
  			case "vintage": 
  				Caman('#mainCanvas', function () {
		  			this.contrast(offset);
				    this.render();
			  	});
  			break;
  			case "sunrise": 
  				Caman('#mainCanvas', function () {
		  			this.sepia(offset);
				    this.render();
			  	});
  			break;
  			case "sincity": 
  				Caman('#mainCanvas', function () {
		  			this.saturation(offset);
				    this.render();
			  	});
  			break;
  			case "nostalgia": 
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
  		}*/
  	};

  });