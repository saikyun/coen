"use strict";

(function(namespace) {
	namespace.circle = function(entity) {
		var _radius = 0;

		var that = Object.create(namespace.position(), {
			radius: {
				get: function()			{ return _radius; },
				set: function(value) {
					var changed = false;
					if (_radius !== value) {
						_radius = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("size_updated");
					}
				}
			},
			name: {
				value: "circle"
			}
		});

		return that;
	};
})(window.coen = window.coen || {});