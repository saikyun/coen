"use strict";

(function(ns) {
	ns.events = function() {
		var _callbacks = {};

		var that = Object.create(null, {
			bind: {
				value: function(event, callback) {
					if (({}).toString.call(callback) != "[object Function]") {
						throw callback + " is not a function";
					}
					
					_callbacks[event] = _callbacks[event] || [];

					_callbacks[event].push(callback);
				}
			},
			trigger: {
				value: function(event, data) {
					if (_callbacks[event]) {
						for (var pos in _callbacks[event]) {
							var callback = _callbacks[event][pos];

							callback.call(null, data);
						}
					}
				}
			},
			name: {
				value: "events"
			}
		});

		return that;
	};
})(window.coen = window.coen || {});