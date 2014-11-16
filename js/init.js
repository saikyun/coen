"use strict";

(function(namespace) {
	namespace.init = function(container, graphic_handler, ticker) {
		var create_player = function(x, y) {
			var player = namespace.player(ticker);
			player.position.x = x;
			player.position.y = y;

			graphic_handler.add_graphic(player);

			return player;
		};

		var create_ground = function(x, y) {
			var ground = namespace.ground(ticker);
			ground.position.x = x;
			ground.position.y = y;

			graphic_handler.add_graphic(ground);

			return ground;
		};

		var create_crosshair = function(player) {
			var crosshair = namespace.crosshair(player, ticker);

			graphic_handler.add_graphic(crosshair);

			return crosshair;
		};

		var vector = window.coen.entity();
		vector.name = "vector";
		vector.set_component(window.coen.vector_component);
		vector.set_component(window.coen.events);

		graphic_handler.add_graphic(vector);

		for (var i = 0; i < 2; i++) {
			create_player(Math.random() * 500, Math.random() * 300);
		}

		for (i = 0; i < 1; i++) {
			create_ground(i * 40, 500);
		}

		var player = create_player(100, 100);
		var movement = namespace.wasd(player, ticker);

		document.onkeydown = movement.key_down;
		document.onkeyup = movement.key_up;

		var crosshair = create_crosshair(player);
		crosshair.events.bind("display_collision_vector", function(data) {
			vector.vector.angle = data.angle;
			vector.vector.velocity = data.velocity;
		});
		namespace.follow_mouse(crosshair, container);
	};
})(window.game = window.game || {});