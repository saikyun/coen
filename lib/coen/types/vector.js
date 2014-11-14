"use strict";

(function(namespace, saved_angles) {
	namespace.vector = function(angle, velocity) {
		var _angle = angle || 0;
		var _velocity = velocity || 0;

		var that = Object.create(null, {
			angle: {
				get: function()			{ return _angle; },
				set: function(value) {
					var changed = false;
					if (_angle !== value) {
						_angle = value;
						changed = true;
					}
				}
			},
			velocity: {
				get: function()			{ return _velocity; },
				set: function(value) {
					var changed = false;
					if (_velocity !== value) {
						_velocity = value;
						changed = true;
					}
				}
			},
			name: {
				value: "vector"
			}
		});

		return that;
	};

	namespace.apply_vector = function(vector1, vector2) {
		vector1 = namespace.vector_to_xy(vector1);
		vector2 = namespace.vector_to_xy(vector2);

		var x = vector1.x + vector2.x;
		var y = vector1.y + vector2.y;

		return namespace.xy_to_vector(x, y);
	};

	namespace.vector_to_xy = function(vector) {
		var xy = {x: 0, y: 0};
		var angle = (vector.angle/180) * Math.PI;

		xy.y = vector.velocity * Math.sin(angle);
		xy.x = vector.velocity * Math.cos(angle);

		xy.y = +xy.y.toFixed(10);
		xy.x = +xy.x.toFixed(10);

		return xy;
	};

	namespace.xy_to_vector = function(x, y) {
		var vector = namespace.vector();

		var velocity = x * x + y * y;
		velocity = Math.sqrt(velocity);
		vector.velocity = velocity;
		vector.angle = Math.atan2(y, x) * 180 / Math.PI;

		return vector;
	};
})(window.coen = window.coen || {}, {});