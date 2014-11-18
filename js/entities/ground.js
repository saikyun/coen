"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.ground = function(ticker, collidables) {
		var that = Object.create(coen.entity(), {
			name: {
				value: "ground"
			}
		});

		that.set_component(coen.position);
		that.set_component(coen.events);
		that.set_component(coen.momentum, ticker);
		that.set_component(coen.rectangle);
		that.set_component(coen.rectangle_collision, collidables);

		that.position.x = 50;
		that.position.y = 50;

		that.rectangle.w = 1000;
		that.rectangle.h = 50;

		return that;
	};
})(window.game = window.game || {});