Discourse.TopicController.reopen({
  markSolved: function(post) {
    this.get('content').setCorrectPost(post);
  }
});