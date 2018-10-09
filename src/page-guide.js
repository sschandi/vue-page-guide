import VPageGuide from '@/components/VPageGuide'

const PageGuide = {
	install(Vue) {
		Vue.directive('page-guide', {
			bind(el, binding, vnode) {
				el.setAttribute('v-page-guide', binding.value);
				
				const modifiers = Object.getOwnPropertyNames(binding.modifiers)
				if (modifiers.length > 0) {
					el.setAttribute('v-page-guide-placement', modifiers[0])
				}
			},
		})
		
		Vue.component('v-page-guide', VPageGuide)
	}
}

export default PageGuide