"use strict";

(function(namespace) {
	namespace.easel_crosshair = function(entity) {
		var that = Object.create(new window.createjs.Container(), {});

		var ball = new window.createjs.Shape();
		ball.graphics.beginFill("green").drawCircle(0, 0, entity.size.w);

		var line = new window.createjs.Shape();

		that.addChild(line, ball);

		var update = function() {
			that.x = entity.position.x;
			that.y = entity.position.y;

			var start_x = entity.player.position.x - that.x;
			var start_y = entity.player.position.y - that.y;
			var end_x = 0;
			var end_y = 0;

			line.graphics.clear();

			line.graphics.setStrokeStyle(1);
			
			line.graphics.beginStroke("red");

			line.graphics.moveTo(start_x, start_y);
			line.graphics.lineTo(end_x, end_y);
			line.graphics.endStroke();
		};

		entity.events.bind("position_updated", update);
		entity.player.events.bind("position_updated", update);

		update();

		return that;
	};
})(window.coen = window.coen || {});