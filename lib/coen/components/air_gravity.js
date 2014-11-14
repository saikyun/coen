"use strict";

(function(namespace) {
	namespace.air_gravity = function(entity, ticker) {
		var _vector = namespace.vector(0, 0.005);

		var that = Object.create(namespace.component_holder(), {
			name: {
				value: "air_gravity"
			}
		});

		that.set_component(namespace.has_been_updated);

		ticker.bind(function() {
			_vector.angle = (entity.momentum.angle + 180) % 360;
			var new_vector = namespace.apply_vector(_vector, namespace.vector(entity.momentum.angle, entity.momentum.velocity));

			entity.momentum.angle = new_vector.angle;
			entity.momentum.velocity = new_vector.velocity;
		});

		return that;
	};
})(window.coen = window.coen || {});