<template>
	<div>
		<ClientOnly>
			<h1>Testing custom component</h1>
			<p page-guide="hello" page-guide-placement="bottom">{{ msg }}</p>
			<button @click="showGuide = !showGuide">Show Guide</button>
			<PageGuide v-model="showGuide"/>
		</ClientOnly>
	</div>
</template>

<script>
// Do to directives not working well with VuePress 0.x, This Demo is not 
// using the v-page-guide directive/plugin and will just manually import
// and assign the attributes for the same effect
import Popper from 'popper.js'
import PageGuide from './VPageGuide'

export default {
	components: {
		PageGuide,
	},
	data() {
		return {
			msg: 'Wow Message',
			showGuide: false,
		}
	},
}
</script>

<style>

</style>
