import { Button } from "discourse/views/post-menu";

export default {
  name: "correct-post",

  initialize: function (container) {
    var PostMenuView = container.lookupFactory("view:post-menu");

    PostMenuView.reopen({
      shouldRerenderCorrectButton: Discourse.View.renderIfChanged("post.topic.correct_post_id"),

      buttonForCorrect: function(post) {
        var correctPostId = post.get("topic.correct_post_id");

        if (post.get("topic.details.can_edit") && post.get("id") === parseInt(correctPostId, 10)) {
          return new Button("correct", "incorrect_post", "check-square", { className: 'mark-incorrect' });
        } else {
          return new Button("correct", "correct_post", "check-square");
        }
      },

      clickCorrect: function() {
        this.get('controller').toggleSolved(this.get("post"));
      }
    });
  }
};