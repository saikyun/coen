"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.player = function(ticker) {
		var that = Object.create(coen.entity(), {
			name: {
				value: "player"
			}
		});

		that.set_component(coen.position);
		that.set_component(coen.events);
		that.set_component(coen.momentum, ticker);
		that.set_component(coen.circle);
		//that.set_component(coen.gravity, ticker);
		that.set_component(coen.air_gravity, ticker);
		that.set_component(coen.circle_collision);

		that.events.bind("momentum_updated", function() {
			if (that.momentum.velocity > 5) {
				that.momentum.velocity = 5;
			}
		});

		that.position.x = 50;
		that.position.y = 50;

		that.circle.radius = 50;

		return that;
	};
})(window.game = window.game || {});