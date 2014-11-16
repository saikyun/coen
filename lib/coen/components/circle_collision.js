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

		var handle_collision = function(entity1, entity2, angle) {
			if (angle < 0) {
				angle += 360;
			}

			if (percentage < 0) {
				percentage += 360;
			}

			var percentage = angle - entity1.momentum.angle;

			percentage = Math.abs(percentage - 180) / 90;

			var entity2_vector = namespace.apply_vector(
				{angle: entity1.momentum.angle, velocity: entity1.momentum.velocity * (1 - percentage)},
				{angle: (angle + 180) % 360, velocity: entity1.momentum.velocity * percentage}
			);
			entity2.momentum.angle = entity2_vector.angle;
			entity2.momentum.velocity = entity2_vector.velocity;

			var entity1_vector = namespace.apply_vector(
				{angle: entity1.momentum.angle, velocity: entity1.momentum.velocity * percentage},
				{angle: angle % 360, velocity: entity1.momentum.velocity * (1 - percentage)}
			);
			entity1.momentum.angle = entity1_vector.angle;
			entity1.momentum.velocity = entity1_vector.velocity;
		};

		entity.events.bind("physics_update", function() {
			for (var pos in objects) {
				if (pos != _pos) {
					var object = objects[pos];

					var x = entity.position.x - object.position.x;
					var y = entity.position.y - object.position.y;

					var distance = x * x + y * y;
					distance = Math.sqrt(distance) - (entity.circle.radius + object.circle.radius);

					if (+distance.toFixed(10) < 0) {
						var angle = ((Math.atan2(y, x) * 180 / Math.PI)) % 360;
						var velocity = distance - 0.001;

						var offset = namespace.vector_to_xy({angle: angle, velocity: velocity});
						entity.position.x -= offset.x;
						entity.position.y -= offset.y;

						handle_collision(entity, object, angle);
						handle_collision(object, entity, (angle+180)%360);
					}
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {}, []);