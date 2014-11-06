(function(namespace) {
	namespace.coen = namespace.coen || {};

	namespace.coen.entity = function() {
		var _components = {};

		var that = Object.create(Object.prototype, {
			set_component: {
				value: function(component) {
					that[component.name] = component;
				}
			},
			has_component: {
				value: function(name) {
					if (that.hasOwnProperty(name)) {
						return true;
					}

					return false;
				}
			},
			get: {
				value: function(name) {
					return _components[name];
				}
			}
		});

		return that;
	}
})(this);