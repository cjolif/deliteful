define([
	"intern!object",
	"intern/chai!assert",
	"delite/register",
	"deliteful/Bar"
], function (registerSuite, assert, register, Bar) {
	var container, mknode, pnode;
	var htmlContent =
		"<d-bar id='dbar'>" +
			"<div id='divA' class='fill'>A</div><div id='divB' class='fill'>B</div>" +
			"<div id='divC' class='fill'>C</div></d-bar>";
	registerSuite({
		name: "Bar",
		setup: function () {
			container = document.createElement("div");
			document.body.appendChild(container);
			container.innerHTML = htmlContent;
			pnode = new Bar();
			container.appendChild(pnode);
			register.deliver();
			mknode = document.getElementById("dbar");
		},
		"afterinit" : function () {
			assert.strictEqual(mknode.vertical, false);
			assert.strictEqual(pnode.vertical, false);
		},
		"switchtovertical" : function () {
			mknode.vertical = true;
			pnode.vertical = true;
			mknode.deliver();
			pnode.deliver();
			assert.strictEqual(mknode.vertical, true);
			assert.strictEqual(pnode.vertical, true);
		},
		teardown : function () {
			container.parentNode.removeChild(container);
		}

	});
});
