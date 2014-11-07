(function(namespace) {
	namespace.control_player = function(player, container) {
		var MILISECONDS = 5;
		
		var keydowns = {};
		var nof_keydowns = 0;

		var timer = null;

		var movement_callback = function(entity, miliseconds) {
			clearTimeout(timer);
			entity.events.trigger("update");
			var callback = function() { movement_callback(entity, miliseconds); };
			timer = setTimeout(callback, miliseconds);
		}

		container.addEventListener("keydown", function(event) {
			var delta_x = 0;
			var delta_y = 0;

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

			if (moved && !keydowns[event.which]) {
				player.momentum.velocity = 1;
				movement_callback(player, MILISECONDS);
				keydowns[event.which] = true;
				nof_keydowns++;
			}
		});

		container.addEventListener("keyup", function(event) {
			if (keydowns[event.which]) {
				delete keydowns[event.which];
				nof_keydowns--;
			}

			if (nof_keydowns >= 0) {
				player.momentum.velocity = 0;
				clearTimeout(timer);
				player.events.trigger("update");
			}
		});
	}
})(this.game = this.game || {});
