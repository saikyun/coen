'use strict';

(function(ns) {
	var coen = window.coen;

	ns.ground = function(ticker, collidables) {
		var that = {
			name: 'ground'
		};

		coen.component.set(that, coen.position);
		coen.component.set(that, coen.events);
		coen.component.set(that, coen.rectangle);
		coen.component.set(that, coen.rectangle_collision, collidables);
		coen.component.set(that, coen.draggable);

		that.position.x = 50;
		that.position.y = 50;

		that.rectangle.w = 1000;
		that.rectangle.h = 50;

		return that;
	};
})(window.game = window.game || {});