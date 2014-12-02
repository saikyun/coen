"use strict";

(function(ns) {
	ns.component = (function() {
		var that = {
			// Add a component to an object, if you want to, you can define the attribute name
			set: function(object, component, data, attribute_name) {
				component = component.call(object, data);
				object[attribute_name || component.name] = component;
			},
			fuse: function(object, component, data) {
				component = component.call(object, data);
				for (var attribute in component) {
					if (component.hasOwnProperty(attribute)) {
						object[attribute] = component[attribute];
					}
				}
			},
			has: function(object, name) {
				if (object.hasOwnProperty(name)) {
					return true;
				}

				return false;
			}	
		};

		return that;
	})();
})(window.coen = window.coen || {});