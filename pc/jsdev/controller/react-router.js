module.exports = {
	component: require("./../modules/home/app"),
	childRoutes: [
		{
			path: '/',
			getComponent: (location, cb) => {
				return require.ensure([], (require) => {
					cb(null, require('./../modules/home/homepage-mobile'))
				})
			}
		}

	]
}