Discourse.Topic.reopen({
  toggleCorrectPost: function(correctPost) {
    var topic = this;
    var correctPostId = correctPost.id;
    
    if (parseInt(topic.correct_post_id, 10) === correctPostId) {
      correctPostId = null;
    }

    return Discourse.ajax({
      url: this.get('url') + '/toggle_solved',
      type: 'PUT',
      data: { correct_post_id: correctPostId }
    }).then(function () {
      topic.set('correct_post_id', correctPostId);
    });
  }
});