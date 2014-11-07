"use strict";

(function(namespace) {
	namespace.has_been_updated = function() {
		var that = Object.create(null, {
			updated: {
				value: false
			},
			has_been_updated: {
				value: function() {
					that.updated = true;
				}
			},
			update: {
				value: function() {
					that.updated = false;
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});