"use strict";

(function(ns) {
	ns.camera = function(stage) {
		var _offset = ns.position();
		
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
				value: "camera"
			}
		});
		
		return that;
	};
})(window.coen = window.coen || {});