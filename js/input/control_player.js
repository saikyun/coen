(function(namespace) {
	namespace.control_player = function(player, container) {
		container.addEventListener("keydown", function(event) {
			switch(event.which) {
				case 87:
					player.position.y--;
					console.log(player);
					player.events.trigger("update");
					break;
				default:
					console.log(event.which);
					break;
			}
		});
	}
})(this);


