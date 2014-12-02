"use strict";

(function(ns) {
	var coen = window.coen;

	ns.crosshair = function(player, ticker, collidables) {
		var that = {
			name: "crosshair",
			player: player
		};

		coen.component.set(that, coen.position);
		coen.component.set(that, coen.events);
		that.radius = 50;
		//coen.component.set(that, coen.circle_collision, collidables);
		coen.component.set(that, coen.momentum, {ticker: ticker});

		return that;
	};
})(window.game = window.game || {});