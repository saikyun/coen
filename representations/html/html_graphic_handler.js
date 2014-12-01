"use strict";

(function(ns) {
	ns.html_graphic_handler = function(document, container) {
		var that = Object.create(null, {
			add_graphic: {
				value: function(entity) {
					ns.entity_html(entity, document, container);
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});