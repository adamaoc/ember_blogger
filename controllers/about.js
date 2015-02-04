Blogger.AboutController = Ember.Controller.extend({
	isPictureShowing: false,
	actions: {
		showRealName: function() {
			alert("What in the world is this crap???");
		},
		showPicture: function() {
			this.set('isPictureShowing', true);
		},
		hidePicture: function() {
			this.set('isPictureShowing', false);
		}
	}
});