"use strict";
/*
var entity = window.entity;

entity.graphics.when.any.has_been.modified(function() {});
entity.vector.when.angle.has_been.modified();
entity.vector.when.angle.or.vector.has_been.modified();

entity.vector.angle.has_been.modified();*/

(function(ns) {

	ns.when = function(object) {
		var _callbacks = {};

		var _action = function(property_name, action, callback) {
			if (({}).toString.call(callback) != "[object Function]") {
				throw callback + " is not a function";
			}
			
			_callbacks[property_name] = _callbacks[property_name] || [];
			_callbacks[property_name][action] = _callbacks[property_name][action] || [];

			_callbacks[property_name][action].push(callback);
		};

		var _trigger = function(property_name, action, data) {
			if (_callbacks[property_name] && _callbacks[property_name][action]) {
				for (var pos in _callbacks[property_name][action]) {
					var callback = _callbacks[property_name][action][pos];

					callback.call(null, data);
				}
			}
		};

		var when = {
			init: function(object) {
				var create_setter = function(property_name, old_setter) {
					return function(value) {
						var old_value = object.property_name;

						old_setter(value);

						if (old_value !== object.property_name) {
							_trigger(property_name, "changed");
						}
					};
				};

				for (var key in object.attributes) {
					var property_name = object.attributes[key];
					when.add_property(property_name);

					var old_property = Object.getOwnPropertyDescriptor(object, property_name);
					console.log(old_property);
					var old_setter = old_property.set;

					old_property.set = create_setter(old_setter, property_name);

					Object.defineProperty(object, property_name, old_property);
				}

				when.add_property("any");
			},
			add_property: function(property_name) {
				when[property_name] = {};
				when[property_name].has_been = {
					changed: function(callback) {
						_action(property_name, "changed", callback);
					}
				};
			}
		};

		when.init(object);
		object.when = when;
	};
})(window.coen = window.coen || {});