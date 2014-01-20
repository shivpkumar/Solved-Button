# name: solved_button
# about: add a button at the end of every post allowing users to mark a post as being correct
# author: shiv kumar

register_asset "javascripts/correct_post.js"
register_asset "javascripts/topic_cont.js"
register_asset "javascripts/topic_controller_cont2.js"
register_asset "stylesheets/correct_post.css.scss"

after_initialize do
  load File.expand_path("../controllers/topics_controller.rb", __FILE__)
  load File.expand_path("../models/topic.rb", __FILE__)
  load File.expand_path("../serializers/topic_view_serializer.rb", __FILE__)

  Discourse::Application.routes.prepend do
    put "t/:slug/:topic_id/mark_solved" => "topics#mark_solved", constraints: {topic_id: /\d+/}
  end
end