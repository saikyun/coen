"use strict";

(function(ns) {
	ns.position = function(entity) {
		var _x = 0;
		var _y = 0;

		var that = Object.create(ns.component_holder(), {
			x: {
				get: function()			{ return _x; },
				set: function(value) {
					var changed = false;
					if (_x !== value) {
						_x = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("position_updated");
					}
				}
			},
			y: {
				get: function()			{ return _y; },
				set: function(value) {
					var changed = false;
					if (_y !== value) {
						_y = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("position_updated");
					}
				}
			},
			name: {
				value: "position"
			}
		});

		return that;
	};
})(window.coen = window.coen || {});