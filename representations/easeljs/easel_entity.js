"use strict";

(function(ns) {
	ns.easel_entity = function(entity) {
		if (!ns.component.has(entity, "radius")) {
			throw entity + " has no radius.";
		}

		if (!ns.component.has(entity, "position")) {
			throw entity + " has no position.";
		}

		var that = Object.create(new window.createjs.Shape(), {});

		that.graphics.beginFill("red").drawCircle(0, 0, entity.radius);

		var update = function() {
			that.x = entity.position.x;
			that.y = entity.position.y;
		};

		entity.events.bind("position_updated", update);

		update();

		return that;
	};
})(window.coen = window.coen || {});