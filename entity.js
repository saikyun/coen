"use strict";

(function(ns) {
	ns.entity = function() {
		var that = Object.create(ns.component_holder());

		return that;
	};
})(window.coen = window.coen || {});