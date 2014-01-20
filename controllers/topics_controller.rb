::TopicsController

class ::TopicsController

  def mark_solved
    topic = Topic.find(params['topic_id'])
    topic.add_meta_data('correct_post_id', params['correct_post_id'])
    topic.save
    
    render nothing: true
  end
end