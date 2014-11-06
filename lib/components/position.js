(function(namespace) {
	namespace.coen = namespace.coen || {};
	namespace.coen.components = namespace.coen.components || {};

	namespace.coen.components.position = function() {
		var that = Object.create(namespace.coen.components.has_been_updated(), {
			x: {
				value: 0,
				writable: true
			},
			y: {
				value: 0,
				writable: true
			},
			name: {
				value: 'position'
			}
		});

		return that;
	}
})(this);