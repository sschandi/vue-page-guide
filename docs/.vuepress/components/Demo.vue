<template>
	<div id="demo">
		<div page-guide="Click anywhere on the overlay to exit" page-guide-placement="right"/>
		<h1>Demo</h1>
		<button
			class="base-btn"
			@click="showGuide = !showGuide"
		>
			Show Guide
		</button>
		<div class="demo-container">
			<div 
				page-guide="Target and raise entire elements"
				page-guide-placement="top"
				class="demo-item"
			>
				<div class="demo-sidebar">
					<p>link</p>
					<p>link</p>
					<p>link</p>
					<p>link</p>
					<p>link</p>
					<p>link</p>
				</div>
				<div class="demo-page-content">
					<div class="demo-header">
						<h3>Header Text</h3>
						<button class="base-btn">login</button>
					</div>
					<div class="demo-page-text">
						<h4>More Text</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere asperiores architecto nostrum, fugiat excepturi incidunt eveniet provident vitae optio impedit alias eos neque illo veniam temporibus consectetur sit corporis.</p>
					</div>
				</div>
			</div>
			<div class="demo-item">
				<div
					page-guide="Hightlight important features"
					class="demo-sidebar"
				>
					<p>link</p>
					<p>link</p>
					<p>link</p>
					<p>link</p>
					<p>link</p>
					<p>link</p>
				</div>
				<div class="demo-page-content">
					<div class="demo-header">
						<h3>Header Text</h3>
						<button
							page-guide="Don't forget to login"
							class="base-btn"
						>
							login
						</button>
					</div>
					<div class="demo-page-text">
						<h4>More Text</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere asperiores architecto nostrum, fugiat excepturi incidunt eveniet provident vitae optio impedit alias eos neque illo veniam temporibus consectetur sit corporis.</p>
					</div>
				</div>
			</div>
		</div>
		<button
			page-guide="This guide is explicitly to the left"
			page-guide-placement="left"
			class="base-btn absolute-btn"
			@click="clickTest"
		>
			BTN
		</button>
		<PageGuide v-model="showGuide"/>
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
			showGuide: false,
		}
	},
	methods: {
		clickTest() {
			console.log('click')
		}
	}
}
</script>

<style>
#demo {
	text-align: center;
}
.demo-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.demo-item {
	margin: 2rem;
	width: 80%;
	display: flex;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.demo-sidebar {
	background-color: #3eaf7c;
	color: #fff;
	width: 20%;
}
.demo-page-content {
	display: flex;
	flex-direction: column;
	width: 80%;
	text-align: left;
	background-color: #fff;
}
.demo-header {
	background-color: #2c3e50;
	color: #fff;
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.demo-page-text {
	padding: 0.5rem;
}
.base-btn {
	color: #fff;
	background-color: #3eaf7c;
	font-size: 1.2rem;
	padding: 0.8rem 1.6rem;
	border-radius: 4px;
	transition: background-color 0.1s ease;
  box-sizing: border-box;
	border: none;
  border-bottom: 1px solid #389d70;
	cursor: pointer;
}
.base-btn:hover {
	background-color: #4abf8a;
}
.absolute-btn {
	position: fixed;
	right: 0;
	bottom: 0;
	margin: 1rem;
}
</style>
