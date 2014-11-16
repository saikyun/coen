"use strict";

(function(namespace) {
	namespace.momentum = function(entity, ticker) {
		var _vector = namespace.vector();

		var that = Object.create(namespace.component_holder(), {
			angle: {
				get: function()			{ return _vector.angle; },
				set: function(value) {
					var changed = false;
					if (_vector.angle !== value) {
						_vector.angle = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("momentum_updated");
					}
				}
			},
			velocity: {
				get: function()			{ return _vector.velocity; },
				set: function(value) {
					var changed = false;
					if (_vector.velocity !== value) {
						_vector.velocity = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("momentum_updated");
					}
				}
			},
			name: {
				value: "momentum"
			}
		});

		ticker.bind(function() {
			if (_vector.velocity) {
				entity.events.trigger("physics_update");
			}
		});

		that.set_component(namespace.has_been_updated);
		that.set_component(namespace.tick_counter);

		entity.events.bind("momentum_updated", function() {
			if (that.velocity === 0) {
				that.tick_counter.stop();
			}
		});

		entity.events.bind("physics_update", function() {
			if (that.velocity !== 0) {
				var delta = namespace.vector_to_xy(_vector);
				var distance = 1;

				entity.position.x += delta.x * distance;
				entity.position.y += delta.y * distance;
			}
		});

		return that;
	};
})(window.coen = window.coen || {});