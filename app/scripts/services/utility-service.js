'use strict';

angular.module('sywhackImgeditorApp')
.service("utilityService", function() {

	this.loadCanvasWithUrlImage = function(canvasId, url) {
		var img = new Image();
		var canvas = document.getElementById(canvasId);
    var context = canvas.getContext('2d');

		img.onload = function() {
			$('#' + canvasId).attr('width', this.width);
			$('#' + canvasId).attr('height', this.height);
			context.drawImage(img, 0, 0, this.width, this.height);
		}

		img.src = url;
	}
})