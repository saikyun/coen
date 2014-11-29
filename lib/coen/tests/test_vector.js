"use strict";

(function(ns) {
	var assert = function(object, value) {
		if (object !== value) {
			throw object + " is not equal to " + value;
		}

		return true;
	};

	var passed_tests = 0;

	console.log("Testing vector");

	var vector = ns.vector({angle: 45, velocity: 1});

	if (assert(+vector.x.toFixed(5), +(0.7071067).toFixed(5))) {
		passed_tests++;
	}

	console.log("Passed " + passed_tests + " test(s)");

	ns.when(vector);
	vector.when.angle.has_been.updated(function() {
		console.log("fuck yarr");
	});
})(window.coen = window.coen || {});