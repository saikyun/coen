"use strict";

(function(ns) {
	ns.position = function(entity, data) {
		var _position = ns.position(data);

		var that = Object.create(ns.component_holder(), {
			x: {
				get: function()			{ return _position.x; },
				set: function(value) {
					var changed = false;
					if (_position.x !== value) {
						_position.x = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("position_updated");
					}
				}
			},
			y: {
				get: function()			{ return _position.y; },
				set: function(value) {
					var changed = false;
					if (_position.y !== value) {
						_position.y = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("position_updated");
					}
				}
			},
			name: {
				value: "position_component"
			}
		});

		return that;
	};
})(window.coen = window.coen || {});