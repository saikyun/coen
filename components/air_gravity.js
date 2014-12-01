"use strict";

(function(ns) {
	ns.air_gravity = function(entity, ticker) {
		var _vector = ns.vector(0, 0.5);

		var that = Object.create(ns.component_holder(), {
			name: {
				value: "air_gravity"
			}
		});

		ticker.bind(function() {
			if (entity.momentum.velocity !== 0) {
				_vector.angle = (entity.momentum.angle + 180) % 360;
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
			}
		});

		return that;
	};
})(window.coen = window.coen || {});