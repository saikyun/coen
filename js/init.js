"use strict";

(function(namespace) {
	var coen = window.coen;

	namespace.init = function(document, container) {
		for (var i = 0; i < 100; i++) {
			var player = namespace.entities.player();
			player.position.x = Math.random() * 1000;
			player.position.y = Math.random() * 1000;

			coen.entity_html(player, document, container);

			namespace.control_player(player, container);
		}
	};
})(window.game = window.game || {});