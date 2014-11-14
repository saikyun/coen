"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.crosshair = function(player) {
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
		that.set_component(coen.size);

		that.size.w = 10;
		that.size.h = 10;

		return that;
	};
})(window.game = window.game || {});