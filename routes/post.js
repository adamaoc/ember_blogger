Blogger.PostRoute = Ember.Route.extend({
	model: function(params) {
		// using Ember Data
		return this.store.find('post', params.post_id);

		// old way
		// return posts.findBy('id', params.post_id);
	}
});