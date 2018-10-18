# Usage

## Basic
target an element using the directive v-page-guide
```html
<div 
	id="my-awesome-el"
	v-page-guide="'Look at my awesome element'"
>
 <!-- Content -->
</div>
```
::: warning
The item that you pass to the page-guide directive must be a String.
If you are directly supplying the text (like above) don't forget to add single quotes
as directives default to accepting js
:::
## Direction Modifier
Choose the direction of the tooltips by using a modifier on the directive.
```html
<div 
	id="my-awesome-el"
	v-page-guide.right="'This tooltip will be on the right'"
>
 <!-- Content -->
</div>
```
### Values
- top
- bottom
- left
- right