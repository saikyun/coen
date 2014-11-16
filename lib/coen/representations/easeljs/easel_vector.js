"use strict";

(function(namespace) {
	namespace.easel_vector = function(entity) {
		if (!entity.has_component("vector")) {
			throw entity + " has no vector.";
		}

		var that = Object.create(new window.createjs.Container(), {});

		var line = new window.createjs.Shape();

		that.addChild(line);

		var update = function() {
			var start_x = 100;
			var start_y = 100;

			var vector_pos = namespace.vector_to_xy(entity.vector);
			var end_x = start_x + vector_pos.x;
			var end_y = start_y + vector_pos.y;

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