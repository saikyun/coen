"use strict";

(function(namespace) {
	namespace.easel_graphic_handler = function(container_id, ticker) {
		var stage = new window.createjs.Stage(container_id);

		stage.canvas.width = window.innerWidth;
		stage.canvas.height = window.innerHeight;

/*
		var tick = function(event) {
			stage.update(event);
		};

		window.createjs.Ticker.on("tick", tick);
		window.createjs.Ticker.setFPS(60);
*/

		var tick = function() {
			stage.update();
		};

		ticker.last_bind(tick);

		var that = Object.create(null, {
			add_graphic: {
				value: function(entity) {
					var graphic = null;

					if (entity.name == "crosshair") {
						graphic = namespace.easel_crosshair(entity);
					} else {
						graphic = namespace.easel_entity(entity);
					}
					stage.addChild(graphic);
				}
			},
			get_stage: {
				value: function() {
					return stage;
				}
			}
		});

		return that;
	};
})(window.coen = window.coen || {});