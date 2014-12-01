"use strict";

(function(ns) {
	ns.rectangle = function(entity) {
		var _w = 0;
		var _h = 0;

		var that = Object.create(ns.component_holder(), {
			w: {
				get: function()			{ return _w; },
				set: function(value) {
					var changed = false;
					if (_w !== value) {
						_w = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("size_updated");
					}
				}
			},
			h: {
				get: function()			{ return _h; },
				set: function(value) {
					var changed = false;
					if (_h !== value) {
						_h = value;
						changed = true;
					}

					if (changed) {
						entity.events.trigger("size_updated");
					}
				}
			},
			name: {
				value: "rectangle"
			}
		});
		
		return that;
	};
})(window.coen = window.coen || {});