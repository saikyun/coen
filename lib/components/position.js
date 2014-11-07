(function(namespace) {
	namespace.position = function() {
		var that = Object.create(namespace.component_holder(), {
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

		that.set_component(namespace.has_been_updated);

		return that;
	}
})(this.coen = this.coen || {});