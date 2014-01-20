class ::Topic
  
  def add_meta_data(key,value)
    self.meta_data = (self.meta_data || {}).merge(key => value)
  end

  def correct_post_id
    return nil if self.meta_data.nil?
    self.meta_data['correct_post_id']
  end
end