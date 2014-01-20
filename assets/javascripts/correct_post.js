Discourse.PostMenuView.reopen({
  shouldRerenderCorrectButton: Discourse.View.renderIfChanged("post.correctPostId"),

  renderCorrect: function(post, buffer) {
    var correctPostId = post.getWithDefault("correctPostId", this.get("post.topic.correct_post_id"));
    
    if (correctPostId && this.get("post.id") == correctPostId) {
      buffer.push("<div id='correct-text'>This post was marked as correct</div>");
      var postNumber = this.get("post.post_number");
      setTimeout(function() {
        $("#post_" + postNumber + " .topic-body").addClass("correct-post");
      }, 250);
    } else {
      if (this.get("post.topic.details.can_edit")) {
        buffer.push('<button title="Mark this post as solving your initial question" data-action="correct">Mark as correct</button>');
      }
    }
  },

  clickCorrect: function() {
    this.get('controller').markSolved(this.get("post"));
    $(".correct-post").removeClass("correct-post");
    $("#correct-text").replaceWith('<button title="Mark this post as solving your initial question" data-action="correct">Mark as correct</button>');
    this.set("post.correctPostId", this.get("post.id"));
  }
});