"use strict";

(function(namespace) {
	namespace.follow_mouse = function(entity, container) {
		var target = {x: 0, y: 0};

		var update_angle_and_velocity = function(target, entity) {
			var vector = window.coen.vector({x: target.x - entity.position.x, y: target.y - entity.position.y});
			entity.momentum.angle = vector.angle;
			entity.momentum.velocity = vector.velocity;
		};

		entity.events.bind("physics_update", function() {
			if (entity.position.x == target.x && entity.position.y == target.y) {
				entity.momentum.velocity = 0;
			} else {
				update_angle_and_velocity(target, entity);
			}

			entity.events.trigger("display_collision_vector", {name: entity.name, angle: entity.momentum.angle, velocity: entity.momentum.velocity * 1});
		});

		container.on("stagemousemove", function(event) {
			target.x = event.stageX;
			target.y = event.stageY;
			update_angle_and_velocity(target, entity);
		});
	};
})(window.game = window.game || {});