"use strict";

(function(namespace) {
	namespace.easel_entity = function(entity) {
		var that = Object.create(new window.createjs.Shape(), {});

		that.graphics.beginFill("red").drawCircle(0, 0, 10);

		var update = function() {
			that.x = entity.position.x;
			that.y = entity.position.y;
		};

		entity.events.bind("position_updated", update);

		update();

		return that;
	};
})(window.coen = window.coen || {});