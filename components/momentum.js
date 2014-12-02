"use strict";

(function(ns) {
	ns.momentum = function(data) {
		var that = ns.vector(data.velocity || null);

		that.name = "momentum";

		var entity = this;

		data.ticker.bind(function() {
			if (that.velocity) {
				entity.events.trigger("physics_update");
				entity.events.trigger("position_updated");
			}
		});

		this.events.bind("physics_update", function() {
			if (that.velocity !== 0) {
				var distance = 1;

				entity.position.x += that.x * distance;
				entity.position.y += that.y * distance;
			}
		});

		return that;
	};
})(window.coen = window.coen || {});