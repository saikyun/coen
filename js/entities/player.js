(function(namespace) {
	namespace.entities = namespace.entities || {};

	namespace.entities.player = function() {
		var that = Object.create(coen.entity());

		that.set_component(coen.components.position());
		that.set_component(coen.components.events());

		that.position.x = 50;
		that.position.y = 50;

		that.set_component(coen.components.momentum());

		that.set_component(coen.components.size());

		that.size.w = 50;
		that.size.h = 50;

		return that;
	}
})(this);