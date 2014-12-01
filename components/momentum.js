"use strict";

(function(ns) {
	ns.momentum = function(entity, ticker) {
		var that = Object.create(ns.vector_component(entity), {
			name: {
				value: "momentum"
			}
		});

		ticker.bind(function() {
			//if (_vector.velocity) {
				entity.events.trigger("physics_update");
			//}
		});
		that.set_component(ns.tick_counter);

		entity.events.bind("vector_updated", function() {
			if (that.velocity === 0) {
				that.tick_counter.stop();
			}
		});

		entity.events.bind("physics_update", function() {
			if (that.velocity !== 0) {
				var distance = 1;

				entity.position.x += that.x * distance;
				entity.position.y += that.y * distance;
			}
		});

		return that;
	};
})(window.coen = window.coen || {});