"use strict";

(function(namespace) {
	namespace.html_graphic_handler = function(document, container) {
		var that = Object.create(null, {
			add_graphic: {
				value: function(entity) {
					namespace.entity_html(entity, document, container);
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});