"use strict";

(function(ns) {
	ns.collision = function(entity, collidables) {
		collidables.push(entity);

		var that = {
			check_circle_collision: function(circle1, circle2) {
					var x = circle1.x - circle2.x;
					var y = circle1.y - circle2.y;

					var distance = x * x + y * y;
					distance = Math.sqrt(distance) - (circle1.radius + circle2.radius);

					if (+distance.toFixed(10) < 0) {
						var angle = ((Math.atan2(y, x) * 180 / Math.PI)) % 360;
						var velocity = distance - 0.001;

						var offset = ns.vector({angle: angle, velocity: velocity});

						return {collided: true, angle: angle, offset: offset};
					}

					return {collided: false};
			},
			check_rectangle_collision: function(entity1, entity2) {
					var difference_x = entity1.position.x - entity2.position.x;
					var difference_y = entity1.position.y - entity2.position.y;

					var distance_x = Math.abs(difference_x) - (entity1.radius + (entity2.rectangle.w / 2));
					var distance_y = Math.abs(difference_y) - (entity1.radius + (entity2.rectangle.h / 2));

					var angle = null;
					var offset = ns.vector();

					if (distance_y < 0 && distance_x < 0) {
						if (entity1.position.x > entity2.position.x - (entity2.rectangle.w / 2) && entity1.position.x < entity2.position.x + (entity2.rectangle.w / 2)) {
							if (difference_y > 0) {
								angle = 90;
							} else {
								angle = 270;
							}
							offset.velocity = distance_y;
						} else if (entity1.position.y > entity2.position.y - (entity2.rectangle.h / 2) && entity1.position.y < entity2.position.y + (entity2.rectangle.h / 2)) {
							if (difference_x > 0) {
								angle = 0;
							} else {
								angle = 180;
							}
							offset.velocity = distance_x;
						} else {
							var corner = {x: entity2.position.x, y: entity2.position.y, radius: 1};

							if (difference_y < 0) {
								corner.y += -entity2.rectangle.h / 2;
							} else {
								corner.y += entity2.rectangle.h / 2;
							}

							if (difference_x < 0) {
								corner.x += -entity2.rectangle.w / 2;
							} else {
								corner.x += entity2.rectangle.w / 2;
							}

							var result = that.check_circle_collision({x: entity1.position.x, y: entity1.position.y, radius: entity1.radius}, corner);
							return result;
						}

						offset.angle = angle;

						if (offset.velocity !== 0) {
							return {
								collided: true,
								angle: angle,
								offset: offset
							};
						}
					}

					return {collided: false};
			},
			handle_collision: function(entity1, entity2, angle, offset) {
					entity1.position.x -= offset.x;
					entity1.position.y -= offset.y;

					if (angle < 0) {
						angle += 360;
					}

					entity1.momentum.angle -= angle;
					entity2.momentum.angle -= angle;

					var modifier = entity2.momentum.x;

					entity1.momentum.x -= modifier;
					entity2.momentum.x -= modifier;

					var mass = 1;

					if (entity2.name == "ground") {
						mass = 0;
					}

					var momentum = entity1.momentum.x * mass;

					entity1.momentum.x -= momentum;
					entity1.momentum.x = -entity1.momentum.x;
					entity2.momentum.x += momentum;

					entity1.momentum.x += modifier;
					entity2.momentum.x += modifier;

					entity1.momentum.angle += angle;
					entity2.momentum.angle += angle;
			},
			name: "collision"
		};

		return that;
	};
})(window.coen = window.coen || {});