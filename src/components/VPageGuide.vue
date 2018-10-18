<template>
	<div class="v-page-guide">
		<div 
			v-if="value"
			class="v-page-guide__overlay"
			:style="{ backgroundColor: overlayColor }"
			@click="$emit('input', false)"
		/>
		<transition :name="transitionClass">
			<div v-show="value">
				<div 
					v-for="(item, index) in elements"
					:ref="`vpageguide${item.id}`"
					:key="index"
					:class="tooltipClass"
				>
					<p class="v-page-guide__text">
						{{ item.text }}
					</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import Popper from 'popper.js'

export default {
	props: {
		value: { type: Boolean, default: null },
		tooltipClass: { type: String, default: 'v-page-guide__tooltip' },
		transitionClass: { type: String, default: 'v-page-guide__fade' },
		overlayColor: { type: String, default: 'rgba(0, 0, 0, 0.4)' },
		elementDisplay: {
			type: Object, 
			default: () => {
				return {} 
			}
		}
	},
	data() {
		return {
			elements: [],
		}
	},
	watch: {
		value() {
			// Allow refs population
			setTimeout(() => {
				this.setUpElements()
			}, 1)
		}
	},
	mounted() {
		this.setUpElements()
	},
	methods: {
		getText(item) {
			return item.getAttribute('v-page-guide')
		},
		setUpElements() {
			this.elements = []
			const elms = document.querySelectorAll('[v-page-guide]')
			let id = 0
			elms.forEach(el => {
				this.elements.push({ 
					el: el, 
					id: id, 
					text: el.getAttribute('v-page-guide'), 
					popper: null,
					placement: el.getAttribute('v-page-guide-placement') || 'auto'
				})
				id++
			})
			// Allow refs population
			setTimeout(() => {
				this.setGuides()
			}, 1)
		},
		setGuides() {
			this.elements.forEach(element => {
				if (this.value) {
					const elPosition = this.getPropValue(element.el, 'position')
					if (elPosition !== 'absolute' && elPosition !== 'relative' && elPosition !== 'fixed') {
						element.el.style.position = 'relative'
					}
					element.el.style.zIndex = '100'
					for (let property in this.elementDisplay) {
						element.el.style[property] = this.elementDisplay[property]
					}
					element.popper = new Popper(
						element.el,
						this.$refs[`vpageguide${element.id}`][0],
						{ placement: element.placement })
				} else { 
					// Reset el properties
					element.el.style.position = ''
					element.el.style.zIndex = ''
					for (let property in this.elementDisplay) {
						element.el.style[property] = ''
					}
				}
			})
		},
		/**
		 * Get an element CSS property on the page
   	 * Thanks to JavaScript Kit: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
		 * and intro.js https://github.com/usablica/intro.js/ where I found it
		 */
		getPropValue(element, propName) {
			var propValue = ''
			if (element.currentStyle) { //IE
				propValue = element.currentStyle[propName]
			} else if (document.defaultView && document.defaultView.getComputedStyle) { //Others
				propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName)
			}

			//Prevent exception in IE
			if (propValue && propValue.toLowerCase) {
				return propValue.toLowerCase()
			} else {
				return propValue;
			}
		}
	}
}
</script>

<style>
.v-page-guide__overlay {
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
	z-index: 99;
}
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
.v-page-guide__text {
	margin: 0;
}
.v-page-guide__fade-enter-active, .v-page-guide__fade-leave-active {
  transition: opacity 0.10s ease-out;
}
.v-page-guide__fade-enter, .v-page-guide__fade-leave-to {
  opacity: 0;
}
</style>
