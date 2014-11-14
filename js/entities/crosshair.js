"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.crosshair = function(player, ticker) {
		var that = Object.create(coen.entity(), {
			name: {
				value: "crosshair"
			},
			player: {
				value: player
			}
		});

		that.set_component(coen.position);
		that.set_component(coen.events);
		that.set_component(coen.circle);
		that.set_component(coen.circle_collision);
		that.set_component(coen.momentum, ticker);

		that.circle.radius = 10;

		return that;
	};
})(window.game = window.game || {});