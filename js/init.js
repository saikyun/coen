"use strict";

(function(namespace) {
	namespace.init = function(container, graphic_handler, ticker) {
		var collidables = [];

		ticker.last_bind(function() {
			var speed = 0;
			collidables.forEach(function(derp) {
				speed += derp.momentum.velocity;
			});
			console.log(speed);
		});

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

		var vector = window.coen.entity();
		vector.name = "vector";
		vector.set_component(window.coen.vector_component);
		vector.set_component(window.coen.events);

		graphic_handler.add_graphic(vector);

		for (var i = 0; i < 3; i++) {
			create_player(100, i*150 + 180);
		}

		create_ground(500, 0, 1000, 50);
		create_ground(500, 1000, 1000, 50);
		create_ground(0, 500, 50, 1000);
		create_ground(1000, 500, 50, 1000);

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