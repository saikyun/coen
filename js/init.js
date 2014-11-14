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

		for (var i = 0; i < 1; i++) {
			create_player(Math.random() * 1000, Math.random() * 1000);
		}

		for (i = 0; i < 1; i++) {
			create_ground(i * 40, 500);
		}

		var player = create_player(100, 100);
		var movement = namespace.wasd(player, ticker);

		document.onkeydown = movement.key_down;
		document.onkeyup = movement.key_up;

		namespace.follow_mouse(create_crosshair(player), container);
	};
})(window.game = window.game || {});