(function(namespace) {
	namespace.coen = namespace.coen || {};
	namespace.coen.components = namespace.coen.components || {};

	namespace.coen.components.events = function() {
		var _callbacks = {};

		var that = Object.create(null, {
			bind: {
				value: function(event, callback) {
					_callbacks[event] = _callbacks[event] || [];

					_callbacks[event].push(callback);
				}
			},
			trigger: {
				value: function(event, data) {
					if (_callbacks[event]) {
						for (var pos in _callbacks[event]) {
							var callback = _callbacks[event][pos];

							callback.call(null, data);
						}
					}
				}
			},
			name: {
				value: 'events'
			}
		});

		return that;
	}
})(this);