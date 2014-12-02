"use strict";

(function(ns) {
	ns.tick_counter = function() {
		var _start_tick = new Date().getTime();
		var _last_tick = 0;
		var _stopped = true;

		var current_tick = function() {
			return new Date().getTime() - _start_tick;
		};

		var that = {
			tick_since_last: function() {
				if (_stopped) {
					that.start();
				}

				var since_last = current_tick() - _last_tick;
				_last_tick = current_tick();
				return since_last;
			},
			start: function() {
				if (_stopped) {
					_start_tick = new Date().getTime();
					_last_tick = 0;
					_stopped = false;
				}
			},
			stop: function() {
				_stopped = true;
			},
			name: "tick_counter"
		};

		return that;
	};
})(window.coen = window.coen || {});