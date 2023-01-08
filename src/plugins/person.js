const objPlugins = {
	install(app, options) {
		const person = {
			name: 'Lee',
			say() {
				alert(this.name);
			},
			...options,
		};
		app.config.globalProperties.$person = person;
		app.provide('person', person);
	},
};

export default objPlugins;
