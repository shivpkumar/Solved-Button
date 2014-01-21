Discourse.PostView.reopen({
  classNameBindings: ['postTypeClass',
                      'selected',
                      'post.hidden:deleted',
                      'post.deleted',
                      'correctClass'],

  correctClass: function() {
    var correctPostId = this.get('post.topic.correct_post_id');
    if (correctPostId && parseInt(correctPostId) === this.get('post.id')) { return "correct-post"; }
  }.property('post.topic.correct_post_id', 'post.id')
});
