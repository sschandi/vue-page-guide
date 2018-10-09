<template>
	<div class="page-guide">
		<transition name="fade">
			<div v-show="value">
				<div 
					class="page-overlay"
					:style="{ backgroundColor: overlayColor }"
					@click="$emit('input', false)"
				/>
				<div 
					v-for="(item, index) in elements"
					:ref="`vpageguide${item.id}`"
					:key="index"
					:class="guideClass"
				>
					<slot name="content" :content="item">
						<p class="text">{{ item.text }}</p>
					</slot>
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
		guideClass: { type: String, default: 'page-guide-tooltip' },
		overlayColor: { type: String, default: 'rgba(0,0,0,0.5)' },
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
				this.setGuides()
			}, 1)
		}
	},
	mounted() {
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
	methods: {
		getText(item) {
			return item.getAttribute('v-page-guide')
		},
		setGuides() {
			this.elements.forEach(element => {
				if (this.value) {
					element.el.style.position = 'relative';
					element.el.style.zIndex = '100';
					for (let property in this.elementDisplay) {
						element.el.style[property] = this.elementDisplay[property]
						console.log(property, this.elementDisplay[property])
					}
					element.popper = new Popper(
						element.el,
						this.$refs[`vpageguide${element.id}`][0],
						{ placement: element.placement })
				} else {
					for (let property in this.elementDisplay) {
						element.el.style[property] = ''
					}
				}
			})
		}
	}
}
</script>

<style scoped>
.page-overlay {
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
	z-index: 99;
}
.page-guide-tooltip {
	position: relative;
	background-color: #2c3e50;
	border-radius: 3px;
	margin: 15px;
	padding: 10px;
	z-index: 100;
}
.page-guide-tooltip[x-placement^="bottom"]:after{
	bottom: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-bottom-color: #2c3e50;
	border-width: 10px;
	margin-left: -10px;
}
.page-guide-tooltip[x-placement^="top"]:after{
	top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-top-color: #2c3e50;
	border-width: 10px;
	margin-left: -10px;
}
.page-guide-tooltip[x-placement^="left"]:after{
	left: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-left-color: #2c3e50;
	border-width: 10px;
	margin-top: -10px;
}
.page-guide-tooltip[x-placement^="right"]:after{
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-right-color: #2c3e50;
	border-width: 10px;
	margin-top: -10px;
}
.text {
	margin: 0;
	color: #fff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
