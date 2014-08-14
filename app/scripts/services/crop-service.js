'use strict';

angular.module('sywhackImgeditorApp')
.service("cropService", function() {
	
	this.enableCrop = function() {
		initDraw(document.getElementById('canvas'));	

		// $('#canvas').bind('click', function(event) {
		// 	var rect = event.currentTarget.getBoundingClientRect();
  //     var localMouseX = event.pageX - rect.left;
  //     var localMouseY = event.pageY - rect.top;
  //     var percentageX = localMouseX / rect.width;
  //     var percentageY = localMouseY / rect.height;

  //     console.log(localMouseX);
  //     console.log(localMouseY);
		// })
	}
	

	function initDraw(canvas) {
		var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var element = null;

    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        var rect = ev.currentTarget.getBoundingClientRect();

        if (ev.pageX) { //Moz
            //mouse.x = ev.pageX + window.pageXOffset;
            //mouse.y = ev.pageY + window.pageYOffset;
            mouse.x = ev.pageX - rect.left;
            mouse.y = ev.pageY - rect.top;
        } else if (ev.clientX) { //IE
            //mouse.x = ev.clientX + document.body.scrollLeft;
            //mouse.y = ev.clientY + document.body.scrollTop;
        }

        console.log(mouse.x);
        console.log(mouse.y);
    };

    canvas.onmousemove = function (e) {
        setMousePosition();
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    }

    canvas.onclick = function (e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("finsihed.");
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
    }
}  	
});
