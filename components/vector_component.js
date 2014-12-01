"use strict";

(function(ns) {
	ns.vector_component = function(entity) {
		var _vector = ns.vector();

		var that = Object.create(ns.position(), {
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
			x: {
				get: function()			{ return _vector.x; },
				set: function(value) {
					var changed = false;
					if (_vector.x !== value) {
						_vector.x = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("vector_updated");
					}
				}
			},
			y: {
				get: function()			{ return _vector.y; },
				set: function(value) {
					var changed = false;
					if (_vector.y !== value) {
						_vector.y = value;
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