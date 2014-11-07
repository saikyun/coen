(function(namespace) {
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

		entity.events.bind("update", function() {
			if (that.velocity != 0) {
				var delta_x = 0;
				var delta_y = 0;

				var angles = [];
				var sides = [];

				angles[0] = (90/180) * Math.PI;
				angles[1] = (that.angle/180) * Math.PI;
				angles[2] = 2 * Math.PI - (angles[0] + angles[1]);

				sides[0] = that.velocity * that.tick_counter.tick_since_last() * 0.01;
				console.log(sides[0]);
				sides[1] = sides[0] * Math.sin(angles[1]) / Math.sin(angles[0]);
				sides[2] = sides[0] * Math.sin(angles[2]) / Math.sin(angles[0]);

				delta_x = sides[1];
				delta_y = sides[2];

				entity.position.x += delta_x;
				entity.position.y += delta_y;
			} else {
				that.tick_counter.stop();
			}
		});

		return that;
	}
})(this.coen = this.coen || {});