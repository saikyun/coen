"use strict";

(function(ns) {
	ns.easel_graphic_handler = function(element, ticker) {
		var stage = new window.createjs.Stage(element);

		stage.canvas.width = 600;
		stage.canvas.height = 600;

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
						graphic = ns.easel_crosshair(entity);
					} else if (entity.name == "vector") {
						graphic = ns.easel_vector(entity);
					} else if (entity.name == "ground") {
						graphic = ns.easel_ground(entity);
					} else {
						graphic = ns.easel_entity(entity);
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