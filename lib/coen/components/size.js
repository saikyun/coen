"use strict";

(function(namespace) {
	namespace.size = function(entity) {
		var _w = 0;
		var _h = 0;

		var that = Object.create(namespace.component_holder(), {
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
				value: "size"
			}
		});

		that.set_component(namespace.has_been_updated);
		
		return that;
	};
})(window.coen = window.coen || {});