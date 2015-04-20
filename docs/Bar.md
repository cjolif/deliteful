---
layout: doc
title: deliteful/Bar
---

# deliteful/Bar

`deliteful/Bar` is a custom element layout widget that lays out other elements either horizontally or vertically.
 

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
require(["deliteful/Bar", "deliteful/Button", "requirejs-dplugins/domReady!"], 
  function () {
});
```

```html
<html>
  <d-bar vertical="true">
  	<button is="d-button">Action #1</button>
  	<button is="d-button">Action #2</button>
  	<button is="d-button">Action #3</button>
  </d-bar>
</html>
```

### Programmatic Instantiation

```js
require(["deliteful/Bar", "deliteful/Button", "requirejs-dplugins/domReady!"], function (Bar, Button) {
  var bar = new Bar({vertical: true});
  bar.appendChild(new Button({label: "Action #1"});
  bar.appendChild(new Button({label: "Action #2"});
  bar.appendChild(new Button({label: "Action #3"});
  bar.placeAt(document.body);
});
```

<a name="configuration"></a>
## Element Configuration

One can change whether the bar is displayed horizontally or vertically using the `vertical` property. By default 
`vertical` is `false` which means the bar is laid out horizontally. 

<a name="styling"></a>
## Element Styling

Here is an exhaustive list of CSS classes that can be used to style the bar:

|class name|applies to|
|----------|----------|
|d-bar |the `Bar` element
|d-bar-v|the `Bar` element when vertical
|d-bar-h|the `Bar` element when horizontal
|d-bar-justified|the `Bar` element when justified

All the CSS classes are automatically set on the bar except the `d-bar-justified` one that has to be set by the
application developer when justification is required.


<a name="interactions"></a>
## User Interactions

The `Bar` does not provide any predefined interactions besides the ones provided by its children elements.

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

`deliteful/Bar` does not provide any internationalizable bundle. 

### Security

This widget has no specific security concern. Refer to `delite/Widget` documentation for general security advice on this base class.

### Browser Support

This widget supports all supported browsers without any degrated behavior.



