"use strict";

(function(ns) {
	ns.easel_vector = function(entity) {
		if (!ns.component.has(entity, "vector")) {
			throw entity + " has no vector.";
		}

		var that = Object.create(new window.createjs.Container(), {});

		var line = new window.createjs.Shape();

		that.addChild(line);

		var update = function() {
			var start_x = 100;
			var start_y = 100;

			var end_x = start_x + entity.vector.x;
			var end_y = start_y + entity.vector.y;

			line.graphics.clear();

			line.graphics.setStrokeStyle(3);
			
			line.graphics.beginStroke("red");

			line.graphics.moveTo(start_x, start_y);
			line.graphics.lineTo(end_x, end_y);
			line.graphics.endStroke();
		};

		entity.events.bind("vector_updated", update);

		update();

		return that;
	};
})(window.coen = window.coen || {});