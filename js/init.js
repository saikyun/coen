(function(namespace) {
	namespace.init = function(document, container) {
		var saved_angles = {};

		for (var i = 0; i < 100; i++) {
			var player = namespace.entities.player();
			player.position.x = Math.random() * 1000;
			player.position.y = Math.random() * 1000;

			var graphics = coen.entity_html(player, document, container);

			namespace.control_player(player, container);
		}
	}
})(this.game = this.game || {});