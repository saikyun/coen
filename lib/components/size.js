"use strict";

(function(namespace) {
	namespace.size = function() {
		var that = Object.create(namespace.component_holder(), {
			w: {
				value: 0,
				writable: true
			},
			h: {
				value: 0,
				writable: true
			},
			name: {
				value: "size"
			}
		});

		that.set_component(namespace.has_been_updated);

		return that;
	};
})(window.coen = window.coen || {});