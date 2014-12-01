"use strict";

(function(ns) {
	ns.gravity = function(entity, ticker) {
		var _vector = ns.vector(90, 0.01);

		var that = Object.create(ns.component_holder(), {
			name: {
				value: "gravity"
			}
		});

		ticker.bind(function() {
			var new_vector = ns.apply_vector(
				_vector,
				ns.vector(
					{
						angle: entity.momentum.angle,
						velocity: entity.momentum.velocity
					}
				)
			);

			entity.momentum.angle = new_vector.angle;
			entity.momentum.velocity = new_vector.velocity;
		});

		return that;
	};
})(window.coen = window.coen || {});