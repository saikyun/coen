"use strict";

(function(namespace) {
	namespace.init = function(container, graphic_handler, ticker) {
		var collidables = [];

		/*ticker.last_bind(function() {
			var speed = 0;
			collidables.forEach(function(derp) {
				speed += derp.momentum.velocity;
			});
			console.log(speed);
		});*/

		var create_player = function(x, y) {
			var player = namespace.player(ticker, collidables);
			player.position.x = x;
			player.position.y = y;

			graphic_handler.add_graphic(player);

			return player;
		};

		var create_ground = function(x, y, w, h) {
			var ground = namespace.ground(ticker, collidables);
			ground.position.x = x;
			ground.position.y = y;
			ground.rectangle.w = w;
			ground.rectangle.h = h;

			graphic_handler.add_graphic(ground);

			return ground;
		};

		var create_crosshair = function(player) {
			var crosshair = namespace.crosshair(player, ticker, collidables);

			graphic_handler.add_graphic(crosshair);

			return crosshair;
		};

		var vector = {};
		vector.name = "vector";
		window.coen.component.set(vector, window.coen.vector);
		window.coen.component.set(vector, window.coen.events);

		graphic_handler.add_graphic(vector);

		for (var i = 0; i < 1; i++) {
			create_player(100, i*150 + 300);
		}

		create_ground(350, 0, 700, 50);
		create_ground(350, 675, 700, 50);
		create_ground(0, 350, 50, 700);
		create_ground(675, 350, 50, 700);

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