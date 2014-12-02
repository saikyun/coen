"use strict";

(function(ns) {
	ns.circle = function(data) {
		data = data || {};

		var that = {
			radius: data.radius || 0,
			position: data.position || ns.position(),
			name: "circle"
		};

		return that;
	};
})(window.coen = window.coen || {});