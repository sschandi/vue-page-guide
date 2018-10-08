<template>
	<div class="page-guide">
		<div class="page-overlay"/>
		<div 
			v-for="(item, index) in elements"
			:ref="`vpageguide${item.id}`"
			:key="index"
			class="page-guide-tooltip page-guide-tooltip-arrow"
		>
			<p>{{ getText(item.el) }}</p>
		</div>
	</div>
</template>

<script>
import Popper from 'popper.js'

export default {
	props: {
		bgColor: { type: String, default: 'teal' },
		fontColor: { type: String, default: '#fff' }
	},
	data() {
		return {
			elements: [],
			show: false,
		}
	},
	computed: {
		tooltipColors() {
			return { borderBottomColor: 'red'}
		}
	},
	mounted() {
		const elms = document.querySelectorAll('[v-page-guide]')
		let id = 0
		elms.forEach(el => {
			this.elements.push({ el: el, id: id, popper: null })
			id++
		})
		this.mounted = true

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
			console.log(this.$refs[`vpageguide${element.id}`][0])
			element.popper = new Popper(element.el, this.$refs[`vpageguide${element.id}`][0], {placement: 'auto',})
			console.log(element.popper)
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
  z-index: 10;
  background-color: rgba(0,0,0,0.5); /*dim the background*/
}
.page-guide-tooltip {
	position: relative;
	z-index: 11;
	background-color: teal;
	border-radius: 5px;
	margin: 15px;
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
	border-bottom-color: teal;
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
	border-top-color: teal;
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
	border-left-color: teal;
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
	border-right-color: teal;
	border-width: 10px;
	margin-top: -10px;
}
p {
	margin: 0;
	padding: 10px;
	color: white;
}
</style>
