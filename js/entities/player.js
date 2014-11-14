"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.player = function(ticker) {
		var that = Object.create(coen.entity());

		that.set_component(coen.position);
		that.set_component(coen.events);
		that.set_component(coen.momentum, ticker);
		that.set_component(coen.size);
		that.set_component(coen.gravity, ticker);
		that.set_component(coen.air_gravity, ticker);

		that.events.bind("momentum_updated", function() {
			if (that.momentum.velocity > 1) {
				that.momentum.velocity = 1;
			}
		});

		that.position.x = 50;
		that.position.y = 50;

		that.size.w = 50;
		that.size.h = 50;

		return that;
	};
})(window.game = window.game || {});