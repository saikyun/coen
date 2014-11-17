"use strict";

(function(namespace) {
	namespace.vector_component = function(entity) {
		var _vector = namespace.vector();

		var that = Object.create(namespace.position(), {
			angle: {
				get: function()			{ return _vector.angle; },
				set: function(value) {
					var changed = false;
					if (_vector.angle !== value) {
						_vector.angle = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("vector_updated");
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
						entity.events.trigger("vector_updated");
					}
				}
			},
			name: {
				value: "vector"
			}
		});

		return that;
	};
})(window.coen = window.coen || {});