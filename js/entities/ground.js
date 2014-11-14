"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.ground = function(ticker) {
		var that = Object.create(coen.entity());

		that.set_component(coen.position);
		that.set_component(coen.events);
		that.set_component(coen.momentum, ticker);
		that.set_component(coen.circle);
		that.set_component(coen.circle_collision);

		that.position.x = 50;
		that.position.y = 50;

		that.circle.radius = 50;

		return that;
	};
})(window.game = window.game || {});