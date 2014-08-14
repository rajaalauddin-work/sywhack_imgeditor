'use strict';

angular.module('sywhackImgeditorApp')
.service("utilityService", function() {

	this.loadCanvasWithUrlImage = function(canvasId, url) {
		var img = new Image();
		var canvas = document.getElementById('canvasId');
    var context = canvas.getContext('2d');

		img.onload = function() {
			context.drawImage(img, 0, 0);
		}

		img.src = url;
	}
})