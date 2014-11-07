"use strict";

(function(namespace) {
	namespace.wasd = function(player, container) {
		var keydowns = {};
		var nof_keydowns = 0;

		var delta_x = 0;
		var delta_y = 0;

		console.log(container);

		container.addEventListener("keydown", function(event) {
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

			if ((delta_x !== 0 || delta_y !== 0) && !keydowns[event.which]) {
				player.momentum.velocity = 90;
				player.momentum.angle = 90 + Math.atan2(delta_y, delta_x) * 180 / Math.PI;
				keydowns[event.which] = true;
				nof_keydowns++;
			}
		});

		container.addEventListener("keyup", function(event) {
			if (keydowns[event.which]) {
				delete keydowns[event.which];
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

			if (nof_keydowns <= 0) {
				player.momentum.velocity = 0;
			} else {
				player.momentum.angle = 90 + Math.atan2(delta_y, delta_x) * 180 / Math.PI;
			}
		});
	};
})(window.game = window.game || {});