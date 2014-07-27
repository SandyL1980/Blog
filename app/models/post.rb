class Post < ActiveRecord::Base
	has_many :reviews
	scope :most_recent_four, -> { all.limit(4) }
end
