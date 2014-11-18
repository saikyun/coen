"use strict";

(function(namespace) {
	namespace.circle_collision = function(entity, collidables) {
		if (!entity.has_component("circle")) {
			throw entity + " has no circle.";
		}

		var that = Object.create(namespace.collision(entity, collidables), {
			name: {
				value: "circle_collision"
			}
		});

		entity.events.bind("physics_update", function() {
			var mypos = collidables.indexOf(entity);
			for (var pos in collidables) {
				if (pos != mypos) {
					var object = collidables[pos];
					var collision_data = null;

					if (object.has_component("circle")) {
						collision_data = that.check_circle_collision(
							{x: entity.position.x, y: entity.position.y, radius: entity.circle.radius},
							{x: object.position.x, y: object.position.y, radius: object.circle.radius}
							);
						if (collision_data.collided === true) {
							that.handle_collision(entity, object, collision_data.angle, collision_data.offset);
						}
					} else if (object.has_component("rectangle")) {
						collision_data = that.check_rectangle_collision(entity, object);
						if (collision_data.collided === true) {
							that.handle_collision(entity, object, collision_data.angle, collision_data.offset);
						}
					}
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});