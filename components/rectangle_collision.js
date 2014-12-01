"use strict";

(function(ns) {
	ns.rectangle_collision = function(entity, collidables) {
		if (!entity.has_component("rectangle")) {
			throw entity + " has no rectangle.";
		}

		var that = Object.create(ns.collision(entity, collidables), {
			name: {
				value: "rectangle_collision"
			}
		});

		entity.events.bind("physics_update", function() {
			var mypos = collidables.indexOf(entity);
			for (var pos in collidables) {
				if (pos != mypos) {
					var object = collidables[pos];
					var collision_data = null;

					if (object.has_component("circle")) {
						collision_data = that.check_rectangle_collision(object, entity);
						if (collision_data.collided === true) {
							that.handle_collision(object, entity, collision_data.angle, collision_data.offset);
						}
					} else if (object.has_component("rectangle")) {
					}
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});