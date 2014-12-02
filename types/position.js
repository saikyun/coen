"use strict";

(function(ns) {
	ns.position = function(data) {
		data = data || {};

		var that = {
			x: data.x || 0,
			y: data.y || 0,
			name: "position"
		};

		return that;
	};
})(window.coen = window.coen || {});