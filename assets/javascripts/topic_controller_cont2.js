Discourse.TopicController.reopen({
  toggleSolved: function(post) {
    this.get('content').toggleCorrectPost(post);
  }
});