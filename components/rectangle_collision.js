"use strict";

(function(ns) {
	ns.rectangle_collision = function(collidables) {
		if (!ns.component.has(this, "rectangle")) {
			throw this + " has no rectangle.";
		}

		var that = Object.create(ns.collision(this, collidables), {
			name: {
				value: "rectangle_collision"
			}
		});

		this.events.bind("physics_update", function() {
			var mypos = collidables.indexOf(this);
			for (var pos in collidables) {
				if (pos != mypos) {
					var object = collidables[pos];
					var collision_data = null;

					if (ns.component.has(this, "circle")) {
						collision_data = that.check_rectangle_collision(object, this);
						if (collision_data.collided === true) {
							that.handle_collision(object, this, collision_data.angle, collision_data.offset);
						}
					} else if (ns.component.has(this, "rectangle")) {
					}
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});