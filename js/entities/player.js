'use strict';

(function(namespace) {
	var coen = window.coen;

	namespace.player = function(ticker, collidables) {
		var that = {};

		Object.defineProperty(that, 'name', {
			value: 'player'
		});

		coen.component.set(that, coen.position, {x: 50, y: 50});
		coen.component.set(that, coen.events);
		coen.component.set(that, coen.momentum, {ticker: ticker});
		coen.component.set(that, coen.gravity, {ticker: ticker});
		coen.component.set(that, coen.air_gravity, {ticker: ticker});
		that.radius = 50;
		coen.component.set(that, coen.circle_collision, collidables);
		coen.component.set(that, coen.draggable);


		return that;
	};
})(window.game = window.game || {});