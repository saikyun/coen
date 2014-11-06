(function(namespace) {
	namespace.coen = namespace.coen || {};
	namespace.coen.components = namespace.coen.components || {};

	namespace.coen.components.size = function() {
		var that = Object.create(namespace.coen.components.has_been_updated(), {
			w: {
				value: 0,
				writable: true
			},
			h: {
				value: 0,
				writable: true
			},
			name: {
				value: 'size'
			}
		});

		return that;
	}
})(this);