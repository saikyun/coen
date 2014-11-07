"use strict";

(function(namespace, saved_angles) {
	namespace.momentum = function(entity, ticker) {
		var _angle = 0;
		var _velocity = 0;

		var that = Object.create(namespace.component_holder(), {
			angle: {
				get: function()			{ return _angle; },
				set: function(value) {
					var changed = false;
					if (_angle !== value) {
						_angle = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("angle_updated");
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
			if (_velocity) {
				entity.events.trigger("physics_update");
			}
		});

		that.set_component(namespace.has_been_updated);
		that.set_component(namespace.tick_counter);

		var calc_delta = function(angle) {
			var delta = {x: 0, y: 0};
			var angles = null;
			var sides = null;

			if (saved_angles[angle]) {
				angles = saved_angles[angle].angles;
				sides = saved_angles[angle].sides;
			} else {
				angles = [];
				sides = [];
				angles[0] = (90/180) * Math.PI;
				angles[1] = (angle/180) * Math.PI;
				angles[2] = 2 * Math.PI - (angles[0] + angles[1]);

				sides[0] = 0.01;
				sides[1] = sides[0] * Math.sin(angles[1]) / Math.sin(angles[0]);
				sides[2] = sides[0] * Math.sin(angles[2]) / Math.sin(angles[0]);

				saved_angles[angle] = {};
				saved_angles[angle].angles = angles;
				saved_angles[angle].sides = sides;
			}

			delta.x = sides[1];
			delta.y = sides[2];

			return delta;
		};

		entity.events.bind("momentum_updated", function() {
			if (that.velocity === 0) {
				that.tick_counter.stop();
			}
		});

		entity.events.bind("physics_update", function() {
			if (that.velocity !== 0) {
				var distance = that.velocity * that.tick_counter.tick_since_last();

				var delta = calc_delta(that.angle);

				entity.position.x += delta.x * distance;
				entity.position.y += delta.y * distance;
			}
		});

		return that;
	};
})(window.coen = window.coen || {}, {});