(function(namespace) {
	namespace.coen = namespace.coen || {};
	namespace.coen.components = namespace.coen.components || {};

	namespace.coen.components.momentum = function() {
		var that = Object.create(namespace.coen.components.has_been_updated(), {
			angle: {
				value: 0,
				writable: true
			},
			velocity: {
				value: 0,
				writable: true
			},
			name: {
				value: 'momentum'
			}
		});

		return that;
	}
})(this);