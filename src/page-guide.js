import VPageGuide from '@/components/VPageGuide'

const PageGuide = {
	install(Vue) {
		Vue.directive('page-guide', {
			bind(el, binding, vnode) {
				// Vue.myGlobal()
				el.setAttribute('v-page-guide', binding.value);
				
				const modifiers = Object.getOwnPropertyNames(binding.modifiers)
				if (modifiers.length > 0) {
					el.setAttribute('v-page-guide-placement', modifiers[0])
				}

				// const poper = document.querySelector('#test')
				// console.log(poper, document);
				// this.popper = new Popper(el, poper);
				// console.log(el, binding, vnode)
			},
			inserted(el, binding, vnode) {
				// el.setAttribute('v-user-tour', 'super text');
			},
			update(el, binding, vnode) {
				// el.setAttribute('v-user-tour', 'super text');
			}
		})

		Vue.mixin({
			methods: {
				$userTour() {
					return document.querySelector('#v-user-tour')
				}
			}
		})
		
		Vue.component('v-page-guide', VPageGuide)
	}
}

export default PageGuide