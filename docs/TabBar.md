---
layout: doc
title: deliteful/TabBar
---

# deliteful/TabBar

`deliteful/TabBar` is a custom element that connect to a `deliteful/ViewStack` and automatically creates tab buttons
that when toggled will switch the currently selected child of the view stack.

##### Table of Contents
[Element Instantiation](#instantiation)  
[Element Configuration](#configuration)  
[Element Styling](#styling)  
[User Interactions](#interactions)  
[Element Events](#events)  
[Enteprise Use](#enterprise)  

<a name="instantiation"></a>
## Element Instantiation

See [`delite/Widget`](/delite/docs/master/Widget.md) for full details on how instantiation lifecycle is working.

### Declarative Instantiation

```js
require(["deliteful/TabBar", "requirejs-dplugins/domReady!"], 
  function () {
});
```

```html
<html>
  <d-tab-bar viewstack="viewstack">
  </d-tab-bar>
  <d-view-stack id="vs" style="width:100%, height:200px">
      <div style="background-color: darkblue">Child 1 (Default visible child)</div>
      <div style="background-color: white">Child 2</div>
      <div style="background-color: crimson">Child 3</div>
  <d-view-stack>
</html>
```

### Programmatic Instantiation

```js
require(["deliteful/TabBar", "deliteful/ViewStack", "requirejs-dplugins/domReady!"], function (TabBar, ViewStack) {
  var tabBar = new TabBar({});
  var vs = new ViewStack({width:"100%, height: 200px"});
  var child1 = document.createElement("div");
  var child2 = document.createElement("div");
  var child3 = document.createElement("div");
  vs.addChild(child1);
  vs.addChild(child2);
  vs.addChild(child3);
  vs.placeAt(document.body);
  tabBar.viewStack = vs;
  tabBar.placeAt(document.body);
});
```

<a name="configuration"></a>
## Element Configuration

The `deliteful/ViewStack` to which the tab bar is connected can be configured using the `viewStack` property either
programmatically or in markup using the `viewstack` attribute on the `d-tab-bar` tag.

By default the tab bar is created instances of `deliteful/Toggle` button using:

* the `title` property of the corresponding view as `label`
* the optional `iconClass` attribute of the corresponding view element as `iconClass` 

One can create a different type of buttons by changing the `toggle` property value to point to another implementation
of `deliteful/Toggle`. Alternatively one can redefine the `createTabButton` method to create the button in a totally
different manner.

<a name="styling"></a>
## Element Styling

The styling of a tab bar inherits all the CSS classes of the [`deliteful/Bar`](./Bar.md#styling)
styling.

<a name="interactions"></a>
## User Interactions

The `TabBar` creates as many `deliteful/ToggleButton` as required by the number of children of the connected view stack.
One can toggle those buttons to show or hide the view stack children.

<a name="events"></a>
## Element Events

There are no specific events.

<a name="enterprise"></a>
## Enterprise Use

### Accessibility

|type|status|comment|
|----|------|-------|
|Keyboard|ok|ok|
|Visual Formatting|ok||
|Screen Reader||Not tested yet|

### Globalization

`deliteful/TabBar` does not provide any internationalizable bundle. The text of the toggle button it creates is taken
from the `deliteful/ViewStack` title property. That property needs to reference an internationazable string in order
for the element to benefit from translations.

### Security

This widget has no specific security concern. Refer to `delite/Widget` documentation for general security advice on this base class.

### Browser Support

This widget supports all supported browsers without any degrated behavior.



