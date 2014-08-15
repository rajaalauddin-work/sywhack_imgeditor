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
		canvasWidth = canvas.width;
		canvasHeight = canvas.height;
		canvasOrig = canvas.toDataURL('image/jpeg');
		ctx = canvas.getContext('2d');
		init(canvas);

		//drawImage(500, 500);
		//utilityService.loadCanvasWithUrlImage("canvas", "http://i.imgur.com/8gRd6o3.jpg");

	}
	
	// var canvas = document.getElementById('canvas'),
 //    ctx = canvas.getContext('2d'),
 //    rect = {},
 //    drag = false;


  function drawImage() {

  	var img = new Image();
	  img.onload = function(){

	      ctx.drawImage(img,0, 0, canvasWidth,canvasHeight);
	  };

		img.src = canvasOrig;
		//imagePaper.src = "http://i.imgur.com/8gRd6o3.jpg";

  }

	function draw() {
		ctx.globalAlpha=0.2;
		ctx.fillStyle = "#000";
	  ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);

	  drawImage();
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


	  Caman("#mainCanvas", function () {
		  // width, height, x, y
		  this.crop(rect.w, rect.h, rect.startX, rect.startY);

		  // Still have to call render!
		  this.render();
		});

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
 	
}]);
