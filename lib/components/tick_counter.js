"use strict";

(function(namespace) {
	namespace.tick_counter = function() {
		var start_tick = new Date().getTime();
		var last_tick = 0;
		var stopped = true;

		var current_tick = function() {
			return new Date().getTime() - start_tick;
		};

		var that = Object.create(namespace.component_holder(), {
			tick_since_last: {
				value: function() {
					if (stopped) {
						that.start();
					}

					var since_last = current_tick() - last_tick;
					last_tick = current_tick();
					return since_last;
				}
			},
			start: {
				value: function() {
					if (stopped) {
						start_tick = new Date().getTime();
						last_tick = 0;
						stopped = false;
					}
				}
			},
			stop: {
				value: function() {
					stopped = true;
				}
			},
			name: {
				value: "tick_counter"
			}
		});

		return that;
	};
})(window.coen = window.coen || {});