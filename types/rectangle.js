"use strict";

(function(ns) {
	ns.rectangle = function(data) {
		data = data || {};

		var that = {
			w: data.w || 0,
			h: data.h || 0,
			position: data.position || ns.position(),
			name: "rectangle"
		};

		return that;
	};
})(window.coen = window.coen || {});