(function(namespace) {
	namespace.coen = namespace.coen || {};
	namespace.coen.components = namespace.coen.components || {};

	namespace.coen.components.has_been_updated = function() {
		var that = Object.create(null, {
			updated: {
				value: false
			},
			has_been_updated: {
				value: function() {
					that.updated = true;
				}
			},
			update: {
				value: function() {
					that.updated = false;
				}
			}
		});

		return that;
	}
})(this);