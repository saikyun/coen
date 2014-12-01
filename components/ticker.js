"use strict";

(function(ns) {
	ns.ticker = function() {
		var _timer = null;
		var _events = null;
		var _last_events = null;

		var _fps = 1000 / 10;

		var _callback = function() {
			_events.trigger("tick");
			_last_events.trigger("tick");
			_timer = setTimeout(_callback, _fps);
		};

		var that = Object.create(ns.component_holder(), {
			bind: {
				value: function(callback) {
					_events.bind("tick", callback);
				}
			},
			last_bind: {
				value: function(callback) {
					_last_events.bind("tick", callback);
				}
			},
			fps: {
				get: function()			{ return _fps; },
				set: function(value) {
					_fps = 1000 / value;
				}
			},
			stop: {
				value: function() {
					clearTimeout(_timer);
				}
			},
			start: {
				value: function() {
					that.stop();
					_timer = setTimeout(_callback, _fps);
				}
			}
		});

		_events = window.coen.events();
		_last_events = window.coen.events();

		return that;
	};
})(window.coen = window.coen || {});