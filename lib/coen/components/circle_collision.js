"use strict";

(function(namespace, objects) {
	namespace.circle_collision = function(entity) {
		if (!entity.has_component("circle")) {
			throw entity + " has no circle.";
		}

		var _pos = objects.length;

		objects.push(entity);

		var that = Object.create(namespace.component_holder(), {
			name: {
				value: "circle_collision"
			}
		});

		that.set_component(namespace.has_been_updated);

		entity.events.bind("physics_update", function() {
			for (var pos in objects) {
				if (pos != _pos) {
					var object = objects[pos];

					var x = entity.position.x - object.position.x;
					var y = entity.position.y - object.position.y;

					var distance = x * x + y * y;
					distance = Math.sqrt(distance);

					if (distance < entity.circle.radius + object.circle.radius) {
						var angle = ((Math.atan2(y, x) * 180 / Math.PI)) % 360;
						if (angle < 0) {
							angle = 360 + angle;
						}
						console.log(angle - entity.momentum.angle);

						var new_vector = window.coen.apply_vector(
							namespace.vector(angle, entity.momentum.velocity),
							namespace.vector(entity.momentum.angle, entity.momentum.velocity)
						);

						entity.momentum.angle = new_vector.angle;
						entity.momentum.velocity = new_vector.velocity;
					}
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {}, []);