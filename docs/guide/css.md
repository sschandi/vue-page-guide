# CSS
A list of all default CSS classes used. These can be overriden with by using
!important or by utilizing props to pass your own custom classes.
## Overlay 
```css
.v-page-guide__overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 99;
}
```
## Text
```css
.v-page-guide__text {
	margin: 0;
}
```
## Tooltip
```css
.v-page-guide__tooltip {
	position: relative;
	background-color: #fff;
	border-radius: 3px;
	margin: 10px;
	padding: 10px;
	z-index: 100;
	-webkit-filter: drop-shadow(0 10px 20px rgba(0,0,0,0.19)) drop-shadow( 0 6px 6px rgba(0,0,0,0.23));
	filter: drop-shadow(0 10px 20px rgba(0,0,0,0.19)) drop-shadow( 0 6px 6px rgba(0,0,0,0.23));
}

.v-page-guide__tooltip[x-placement^="bottom"]:after{
	bottom: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-bottom-color: #fff;
	border-width: 10px;
	margin-left: -10px;
}

.v-page-guide__tooltip[x-placement^="top"]:after{
	top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-top-color: #fff;
	border-width: 10px;
	margin-left: -10px;
}

.v-page-guide__tooltip[x-placement^="left"]:after{
	left: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-left-color: #fff;
	border-width: 10px;
	margin-top: -10px;
}

.v-page-guide__tooltip[x-placement^="right"]:after{
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-right-color: #fff;
	border-width: 10px;
	margin-top: -10px;
}
```
## Transition
```css
.v-page-guide__fade-enter-active, .v-page-guide__fade-leave-active {
	transition: opacity 0.10s ease-out;
}
.v-page-guide__fade-enter, .v-page-guide__fade-leave-to {
	opacity: 0;
}
```