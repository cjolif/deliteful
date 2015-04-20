define([
	"intern!object",
	"intern/chai!assert",
	"delite/register",
	"deliteful/Bar"
], function (registerSuite, assert, register) {
	var container, node;
	var htmlContent =
		"<d-bar id='dbar' vertical='false' style='width:999px; height:999px'>" +
			"<div id='divA' class='fill'>A</div><div id='divB' class='fill'>B</div>" +
			"<div id='divC' class='fill'>C</div></d-bar>";
	registerSuite({
		name: "Bar",
		setup: function () {
			container = document.createElement("div");
			document.body.appendChild(container);
			container.innerHTML = htmlContent;
			register.parse(container);
			node = document.getElementById("dbar");
			node.deliver();
		},
		"test" : function () {
		},
		teardown : function () {
			container.parentNode.removeChild(container);
		}

	});
});
