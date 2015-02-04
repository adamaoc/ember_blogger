Blogger.RecentCommentsRoute = Ember.Route.extend({
	model: function() {
		// using a data store
		return this.store.find('comment');
		// assuming a comments array was already defined
		// return comments;
	}
});