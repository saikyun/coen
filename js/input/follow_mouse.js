"use strict";

(function(namespace) {
	namespace.follow_mouse = function(entity, container) {
		container.on("stagemousemove", function(event) {
			entity.position.x = event.stageX;
			entity.position.y = event.stageY;
		});
	};
})(window.game = window.game || {});