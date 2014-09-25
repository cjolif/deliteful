/** @module delite/Memory */
define(["dcl/dcl", "delite/register", "delite/CustomElement", "dstore/Memory", "dstore/Trackable"],
	function (dcl, register, CustomElement, Memory, Trackable) {

	var Store = Memory.createSubclass([Trackable], {});
	
	/**
	 * Custom element to create an instance of a memory store object. 
	 * This is particularly useful in markup, when creating store programatically this is easier to just create a store
	 * instance directly than the custom element.
	 * Note that it is only parsed once at attachment time. Further modifications to the store must be made through
	 * the store API instead of the DOM API.
	 * @example
	 * <body>
	 *   <d-store>
	 *    { "label": "France", "sales": 500, "profit": 50, "region": "EU" },
	 *    { "label": "Germany", "sales": 450, "profit": 48, "region": "EU" },
	 *    { "label": "UK", "sales": 700, "profit": 60, "region": "EU" }
	 *   </d-dstore>
	 * </body>
	 * @class module:deliteful/Store
	 * @augments module:delite/CustomElement
	 */
	return register("d-store", [HTMLElement, CustomElement], /** @lends module:deliteful/Store# */{
		createdCallback: function () {
			this.style.display = "none";
		},
		attachedCallback: function () {
			var store = new Store();
			var data = JSON.parse("[" + this.textContent + "]");
			for (var j = 0; j < data.length; j++) {
				if (!data[j][store.idProperty]) {
					data[j][store.idProperty] = Math.random();
				}
			}
			store.setData(data);
			dcl.mix(this, store);
		}
	});
});
