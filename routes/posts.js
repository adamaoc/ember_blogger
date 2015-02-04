Blogger.PostsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('post');
	}
});


// getting data from a hard coded store
// old way...
// Blogger.PostsRoute = Ember.Route.extend({
// 	// These are set by default - 
// 	// if you ever want to change the default this is how
// 	//
// 	// controllerName: 'posts',
// 	// renderTemplate: function() {
// 	// 	this.render('posts');
// 	// },
// 	model: function() {
// 		return posts;
// 	}
// });