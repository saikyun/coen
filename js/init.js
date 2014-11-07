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

		for (var i = 0; i < 0; i++) {
			create_player(Math.random() * 1000, Math.random() * 1000);
		}

		namespace.wasd(create_player(100, 100), container);
	};
})(window.game = window.game || {});