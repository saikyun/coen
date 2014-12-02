"use strict";

(function(ns) {
	ns.vector = function(data) {
		var _vector = {angle: 0, velocity: 0};
		var _xy = {x: 0, y: 0};

		var _xy_changed = false;
		var _av_changed = false;

		if (data) {
			if (data.x !== undefined && data.y !== undefined) {
				_xy = {x: data.x, y: data.y};
				_xy_changed = true;
			} else if (data.angle !== undefined && data.velocity !== undefined) {
				_vector = {angle: data.angle || 0, velocity: data.velocity || 0};
				_av_changed = true;
			} else {
				throw "You inputted some stupid shit " + data;
			}
		}

		var _vector_to_xy = function(vector) {
			if (!(vector.hasOwnProperty("angle") && vector.hasOwnProperty("velocity"))) {
				throw vector + " doesn't have angle and velocity";
			}

			var xy = {x: 0, y: 0};
			var angle = (vector.angle/180) * Math.PI;

			xy.y = vector.velocity * Math.sin(angle);
			xy.x = vector.velocity * Math.cos(angle);

			xy.y = xy.y;
			xy.x = xy.x;

			return xy;
		};

		var _xy_to_vector = function(xy) {
			var vector = {velocity: 0, angle: 0};

			var velocity = xy.x * xy.x + xy.y * xy.y;
			velocity = Math.sqrt(velocity);
			vector.velocity = velocity;
			vector.angle = Math.atan2(xy.y, xy.x) * 180 / Math.PI;

			vector.angle = vector.angle % 360;
			if (vector.angle < 0) {
				vector.angle += 360;
			}

			return vector;
		};

		var that = Object.create(Object.prototype, {
			angle: {
				get: function() {
					if (_xy_changed) {
						_vector = _xy_to_vector(_xy);

						_xy_changed = false;
					}

					return _vector.angle;
				},
				set: function(value) {
					if (_vector.angle !== value) {
						_vector.angle = value;

						_vector.angle = _vector.angle % 360;
						if (_vector.angle < 0) {
							_vector.angle += 360;
						}

						_av_changed = true;
					}
				}
			},
			velocity: {
				get: function() {
					if (_xy_changed) {
						_vector = _xy_to_vector(_xy);
						_xy_changed = false;
					}

					return _vector.velocity;
				},
				set: function(value) {
					if (_vector.velocity !== value) {
						_vector.velocity = value;
						_av_changed = true;
					}
				}
			},
			x: {
				get: function() {
					if (_av_changed) {
						_xy = _vector_to_xy(that);
						_av_changed = false;
					}

					return _xy.x;
				},
				set: function(x) {
					if (x != _xy.x) {
						_xy.x = x;
						_xy_changed = true;
					}
				}
			},
			y: {
				get: function() {
					if (_av_changed) {
						_xy = _vector_to_xy(that);
						_av_changed = false;
					}

					return _xy.y;
				},
				set: function(y) {
					if (y != _xy.y) {
						_xy.y = y;
						_xy_changed = true;
					}
				}
			}
		});

		that.name = "vector";

		return that;
	};

	ns.apply_vector = function(vector1, vector2) {
		var x = vector1.x + vector2.x;
		var y = vector1.y + vector2.y;

		return ns.vector({x: x, y: y});
	};
})(window.coen = window.coen || {});