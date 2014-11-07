(function(namespace) {
	namespace.init = function(document, container) {
		var player = namespace.entities.player();

		var graphics = coen.entity_html(player, document, container);

		namespace.control_player(player, container);
	}
})(this.game = this.game || {});