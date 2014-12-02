"use strict";

(function(ns) {
	ns.easel_ground = function(entity) {
		if (!ns.component.has(entity, "rectangle")) {
			throw entity + " has no rectangle.";
		}

		var that = Object.create(new window.createjs.Shape(), {});

		that.graphics.beginFill("red").drawRect(-entity.rectangle.w/2, -entity.rectangle.h/2, entity.rectangle.w, entity.rectangle.h);

		var update = function() {
			that.x = entity.position.x;
			that.y = entity.position.y;
		};

		entity.events.bind("position_updated", update);

		update();

		return that;
	};
})(window.coen = window.coen || {});