# Props
Props are used to help control styling of the Page Guide, making it easy to pass
overriding css classes if needed.

## v-model
Used to control the visibility of the Page Guide

<strong>Type:</strong> Boolean

## element-display
Properties you wish to apply to the targeted (v-page-guide="") element.
These attributes will only be applied when the guide is visible.

<strong>Type:</strong> Object
::: tip
z-index: 100 and a conditional position: relative (if element is not already absolute, sticky, or fixed)
are applied automatically, you can use this prop to remove these settings or adjust them + any others
:::
```html
<VPageGuide
	v-model="showGuide"
	:element-display="attributes"
/>
<!-- data () -->
attributes :{
	zIndex: '',
	position: '',
}
```
## overlay-color
Change the overlay color (pass :overlay-color=" ' ' " for no overlay)

<strong>Type:</strong> String

<strong>Default:</strong> 'rgba(0, 0, 0, 0.4)'


## tooltip-class
If you wish to use your own tooltip css, pass the class name here

[See CSS for default styling](/guide/css.md)

<strong>Type:</strong> String

<strong>Default:</strong> 'v-page-guide__tooltip'

## transition-class
Elements fade in and out on Page Guide toggle by default

[See CSS for default styling](/guide/css.md)

<strong>Type:</strong> String

<strong>Default:</strong> 'v-page-guide__fade'