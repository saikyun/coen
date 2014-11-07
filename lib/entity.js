(function(namespace) {
	namespace.entity = function() {
		var _components = {};

		var that = Object.create(namespace.component_holder());

		return that;
	}
})(this.coen = this.coen || {});