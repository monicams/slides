/* @license Copyright (c) 2011-2013 Brian Cavalier */
define([
		'app/hc/slides/SingleFilePresentationModel',
		'app/hc/slides/SlideView',
		'app/hc/slides/PresentationController',
		'css!themes/black/theme.css',
		'css!themes/fade.css',
		'domReady!'
	],
	function(Model, View, Controller) {
		var model, view, controller;

		model = new Model('text!slides/slides.html');
		view = new View(document.getElementById('slide-container'), model);
		controller = new Controller(view);

		controller.start().then(function() {
			document.body.className = '';
		});
	}
);