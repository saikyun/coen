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

		var create_crosshair = function(player) {
			var crosshair = namespace.crosshair(player);

			graphic_handler.add_graphic(crosshair);

			return crosshair;
		};

		for (var i = 0; i < 0; i++) {
			create_player(Math.random() * 1000, Math.random() * 1000);
		}

		var player = create_player(100, 100);
		var movement = namespace.wasd(player, ticker);

		document.onkeydown = movement.key_down;
		document.onkeyup = movement.key_up;

		namespace.follow_mouse(create_crosshair(player), container);
	};
})(window.game = window.game || {});