::TopicViewSerializer

class ::TopicViewSerializer
  attributes :correct_post_id

  def correct_post_id
    object.topic.correct_post_id
  end
end