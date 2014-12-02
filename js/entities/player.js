"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.player = function(ticker, collidables) {
		var that = {
			name: "player"
		};

		coen.component.set(that, coen.position, {x: 50, y: 50});
		coen.component.set(that, coen.events);
		coen.component.set(that, coen.momentum, {ticker: ticker});
		//coen.component.set(that, coen.gravity, ticker);
		//coen.component.set(that, coen.air_gravity, ticker);
		that.radius = 50;
		coen.component.set(that, coen.circle_collision, collidables);


		return that;
	};
})(window.game = window.game || {});