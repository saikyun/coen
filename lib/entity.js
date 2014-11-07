"use strict";

(function(namespace) {
	namespace.entity = function() {
		var that = Object.create(namespace.component_holder());

		return that;
	};
})(window.coen = window.coen || {});