module.exports = {
	title: 'Vue Page Guide',
	description: 'Simple page guide plugin for Vue projects',
	base: '/vue-page-guide/',
	themeConfig: {
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
						'slots',
						'css'
					]
				}
			]
		}
	}
}