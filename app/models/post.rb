class Post < ActiveRecord::Base

	scope :most_recent_four, -> { all.limit(4) }
end
