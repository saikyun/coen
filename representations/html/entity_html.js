"use strict";

(function(ns) {
	ns.entity_html = function(entity, document, container) {
		var _html_entity = null;

		if (
			   !ns.component.has("size") ||
			   !ns.component.has("position")
		) {
			console.log(entity + " doesn't have size and position.");
			return null;
		}

		var that = Object.create(null, {
			init: {
				value: function() {
					_html_entity = document.createElement("div");

					container.appendChild(_html_entity);

					that.update();

					entity.events.bind("position_updated", that.update);
					entity.events.bind("size_updated", that.update);
				}
			},
			update: {
				value: function() {
					var same = "position: absolute; background-color: #00FF00; ";
					var position = "left: " + entity.position.x + "px; " + "top: " + entity.position.y + "px; ";
					var size = "width: " + entity.size.w + "px; " + "height: " + entity.size.h + "px; ";

					_html_entity.setAttribute("style", same + position + size);
				}
			}
		});

		that.init();

		return that;
	};
})(window.coen = window.coen || {});