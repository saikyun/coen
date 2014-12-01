"use strict";

(function(ns) {
	ns.easel_entity = function(entity) {
		if (!entity.has_component("circle")) {
			throw entity + " has no circle.";
		}

		var that = Object.create(new window.createjs.Shape(), {});

		that.graphics.beginFill("red").drawCircle(0, 0, entity.circle.radius);

		var update = function() {
			that.x = entity.position.x;
			that.y = entity.position.y;
		};

		entity.events.bind("position_updated", update);

		update();

		return that;
	};
})(window.coen = window.coen || {});