"use strict";

(function(ns) {
	ns.circle_collision = function(collidables) {
		if (!ns.component.has(this, "radius")) {
			throw this + " has no radius.";
		}

		var that = Object.create(ns.collision(this, collidables), {
			name: {
				value: "circle_collision"
			}
		});

		var entity = this;

		this.events.bind("physics_update", function() {
			var mypos = collidables.indexOf(this);
			for (var pos in collidables) {
				if (pos != mypos) {
					var object = collidables[pos];
					var collision_data = null;

					if (ns.component.has(object, "circle")) {
						collision_data = that.check_circle_collision(
							{x: this.position.x, y: this.position.y, radius: this.circle.radius},
							{x: object.position.x, y: object.position.y, radius: object.circle.radius}
							);
						if (collision_data.collided === true) {
							that.handle_collision(this, object, collision_data.angle, collision_data.offset);
						}
					} else if (ns.component.has(object, "rectangle")) {
						collision_data = that.check_rectangle_collision(this, object);
						if (collision_data.collided === true) {
							that.handle_collision(this, object, collision_data.angle, collision_data.offset);
						}
					}
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});