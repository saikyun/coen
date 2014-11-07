(function(namespace, saved_angles) {
	namespace.momentum = function(entity) {
		var that = Object.create(namespace.component_holder(), {
			angle: {
				value: 0,
				writable: true
			},
			velocity: {
				value: 0,
				writable: true
			},
			name: {
				value: 'momentum'
			}
		});

		that.set_component(namespace.has_been_updated);
		that.set_component(namespace.tick_counter);

		var calc_delta = function(angle, velocity, ticks) {
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

			var distance = ticks * velocity;

			delta.x = sides[1] * distance;
			delta.y = sides[2] * distance;

			return delta;
		}

		entity.events.bind("update", function() {
			if (that.velocity != 0) {
				var delta = calc_delta(that.angle, that.velocity, that.tick_counter.tick_since_last());

				entity.position.x += delta.x;
				entity.position.y += delta.y;
			} else {
				that.tick_counter.stop();
			}
		});

		return that;
	}
})(this.coen = this.coen || {}, {});