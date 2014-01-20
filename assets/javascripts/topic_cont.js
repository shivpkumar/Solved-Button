Discourse.Topic.reopen({
  setCorrectPost: function(correctPost) {
    return Discourse.ajax({
      url: this.get('url') + '/mark_solved',
      type: 'PUT',
      data: { correct_post_id: correctPost.id }
    });
  }
});