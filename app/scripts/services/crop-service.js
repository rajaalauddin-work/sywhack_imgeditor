'use strict';

angular.module('sywhackImgeditorApp')
.service("cropService", [ "utilityService", function(utilityService) {
	
	var rect = {};
	var drag = false;
	var canvas;
	var ctx;
	var canvasWidth, canvasHeight;
	var canvasOrig;

	this.enableCrop = function() {
		//initDraw(document.getElementById('canvas'));	
		//init();
		//debugger;
		canvas = document.getElementById('mainCanvas');
		// debugger;
		canvasWidth = canvas.width;
		canvasHeight = canvas.height;
		canvasOrig = canvas.toDataURL('image/jpeg');
		ctx = canvas.getContext('2d');
		init(canvas);

		// create another canvas
		createBgCanvas();
		//drawImage(500, 500);
		//utilityService.loadCanvasWithUrlImage("canvas", "http://i.imgur.com/8gRd6o3.jpg");

	}

	this.performCrop = function() {
		//draw it first, then crop
	  drawImage();

	  //remove bg canvas
	  $('#cropBg').remove();


	  Caman("#mainCanvas", function () {
		  // width, height, x, y
		  this.crop(rect.w, rect.h, rect.startX, rect.startY);

		  // Still have to call render!
		  this.render();
		});

	}

	function createBgCanvas() {

		// create another canvas for image
		var canvasImg = document.createElement('canvas');
		var canvasLeft = canvas.getBoundingClientRect().left;
		var canvasTop = canvas.getBoundingClientRect().top;
		canvasImg.width = canvasWidth;
		canvasImg.height = canvasHeight;
		$(canvasImg).attr('id', 'cropBg');
		$(canvasImg).css('left', canvasLeft);
		$(canvasImg).css('z-index', '-9');
		canvasImg.style.position = "absolute";
		$('.img-holder').append(canvasImg);
		var ctx2 = canvasImg.getContext('2d');
		var img = new Image();
	  img.onload = function(){
	      ctx2.drawImage(img,0, 0, canvasWidth,canvasHeight);
	  };

		img.src = canvasOrig;

	}
	
	// var canvas = document.getElementById('canvas'),
 //    ctx = canvas.getContext('2d'),
 //    rect = {},
 //    drag = false;


  function drawImage() {

  	var img = new Image();
	  img.onload = function(){
	  		canvas.width = canvas.width;
	      ctx.drawImage(img,0, 0, canvasWidth,canvasHeight);
	  };

		img.src = canvasOrig;
		//imagePaper.src = "http://i.imgur.com/8gRd6o3.jpg";

  }

	function draw() {
		ctx.globalAlpha=0.2;
		ctx.fillStyle = "#000";
	  ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);

	  //drawImage();
	  //drawImage(500, 500);
	  //utilityService.loadCanvasWithUrlImage("canvas", "http://i.imgur.com/8gRd6o3.jpg");

	}

	function mouseDown(e) {
	  rect.startX = e.pageX - this.offsetLeft;
	  rect.startY = e.pageY - this.offsetTop;
	  drag = true;
	}

	function mouseUp() {
	  drag = false;

	  // draw it first, then crop
	  //drawImage();

	  // remove bg canvas
	  //$('#cropBg').remove();


	 //  Caman("#mainCanvas", function () {
		//   // width, height, x, y
		//   this.crop(rect.w, rect.h, rect.startX, rect.startY);

		//   // Still have to call render!
		//   this.render();
		// });

		//utilityService.loadCanvasWithUrlImage("canvas", "http://i.imgur.com/8gRd6o3.jpg");
	}

	function mouseMove(e) {
	  if (drag) {
	    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
	    rect.h = (e.pageY - this.offsetTop) - rect.startY ;
	    ctx.clearRect(0,0,canvas.width,canvas.height);
	    draw();
	  }
	}

	function init(canvas) {
	  canvas.addEventListener('mousedown', mouseDown, false);
	  canvas.addEventListener('mouseup', mouseUp, false);
	  canvas.addEventListener('mousemove', mouseMove, false);
	}

	function resetCanvas(canvas) {
		canvas.width = canvas.width;
	}
 	
}]);
