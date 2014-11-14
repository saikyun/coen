"use strict";

(function(namespace) {
	namespace.wasd = function(entity, ticker) {
		if (!entity.has_component("momentum")) {
			throw entity + " doesn't have momentum";
		}

		var keydowns = {};
		var nof_keydowns = 0;

		var delta_x = 0;
		var delta_y = 0;

		var vectors = {};

		var that = Object.create(null);

		that.key_down = function(event) {
			switch(event.which) {								// Directions
				case 87:										// Up
					delta_y = -1;
					break;
				case 83:										// Down
					delta_y = 1;
					break;
				case 65:										// Left
					delta_x = -1;
					break;
				case 68:										// Right
					delta_x = 1;
					break;
				default:
					break;
			}

			if ((delta_x || delta_y) && !keydowns[event.which]) {
				vectors[event.which] = window.coen.vector(Math.atan2(delta_y, delta_x) * 180 / Math.PI, 0.5);
				keydowns[event.which] = true;
				nof_keydowns++;
			}
		};

		that.key_up = function(event) {
			if (keydowns[event.which]) {
				delete keydowns[event.which];
				delete vectors[event.which];
				nof_keydowns--;

				switch(event.which) {								// Directions
					case 87:										// Up
						delta_y += 1;
						break;
					case 83:										// Down
						delta_y -= 1;
						break;
					case 65:										// Left
						delta_x += 1;
						break;
					case 68:										// Right
						delta_x -= 1;
						break;
					default:
						break;
				}
			}
		};

		ticker.bind(function() {
			for (var pos in vectors) {
				var vector = vectors[pos];

				var new_vector = window.coen.apply_vector(vector, window.coen.vector(entity.momentum.angle, entity.momentum.velocity));

				entity.momentum.angle = new_vector.angle;
				entity.momentum.velocity = new_vector.velocity;

				if (vector.velocity > 0.1) {
					vector.velocity -= 0.1;
				}
			}
		});

		return that;
	};
})(window.game = window.game || {});