"use strict";

(function(namespace) {
	namespace.component_holder = function() {
		var _components = {};

		var that = Object.create(Object.prototype, {
			set_component: {
				value: function(component) {
					component = component(that);
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
	};
})(window.coen = window.coen || {});