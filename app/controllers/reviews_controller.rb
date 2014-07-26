class ReviewsController < ApplicationController
  before_filter :load_post

  def index

  end

  def show
  	@review = Review.find(params[:id])

  end


  def create
  	@review = @post.reviews.build(review_params)
  	@review.user_id = current_user.id

  	if @review.save
  		redirect_to post_path(@post), notice: "Thank you for your review"
 	else
 		render 'posts/show'
  	end
  end

  def destroy
  	@review = Review.find(params[:id])
  	@review.destroy
  	redirect_to restaurants_path
  end



  def load_post
  	@post= Post.find(params[:post_id])
  end

  private
  def review_params
  	params.require(:review).permit(:comment, :post_id, :user_id)
  end

end
