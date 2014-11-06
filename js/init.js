(function(namespace) {
	namespace.init = function(document, container) {
		var player = namespace.entities.player();

		var graphics = coen.representations.html.entity_html(player, document, container);

		namespace.control_player(player, container);

		console.log(player);
		console.log(graphics);
	}
})(this);