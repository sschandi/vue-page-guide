module.exports = {
	title: 'Vue Page Guide',
	description: 'Simple page guide plugin for Vue projects',
	base: '/vue-page-guide/',
	themeConfig: {
		nav: [
			{ text: 'Documentation', link: '/guide/' },
			{ text: 'Demo', link: '/demo/'},
			{ text: 'Github', link: 'https://github.com/sschandi/vue-page-guide' },
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Documentation',
					collapsable: false,
					children: [
						'',
						'getting-started',
						'plugin',
						'props',
						'css'
					]
				}
			]
		}
	}
}