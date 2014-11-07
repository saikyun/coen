(function(namespace) {
	namespace.entities = namespace.entities || {};

	namespace.entities.player = function() {
		var that = Object.create(coen.entity());

		that.set_component(coen.position);
		that.set_component(coen.events);
		that.set_component(coen.momentum);
		that.set_component(coen.size);

		that.position.x = 50;
		that.position.y = 50;

		that.size.w = 50;
		that.size.h = 50;

		return that;
	}
})(this.game = this.game || {});