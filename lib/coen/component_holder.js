"use strict";

(function(namespace) {
	namespace.component_holder = function() {
		var _components = {};

		var that = Object.create(Object.prototype, {
			set_component: {
				value: function(component) {
					var args = [].splice.call(arguments, 1);
					component = component.apply(null, [that].concat(args));
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