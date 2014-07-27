class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :edit, :update, :destroy]
  before_filter :load_post

  def index
     @reviews = Review.all
  end

  def show
  end

  def new
    @post = Post.find(params[:post_id])
    @review = @post.reviews.build(review_params)
  end


  def create
  	@review = @post.reviews.build(review_params)
  	@review.user_id = current_user.id

    respond_to do |format|
    	if @review.save
    		format.html {redirect_to post_path(@post), notice: "Thank you for your review"}
   	    format.js  
      else
   		  format.html { render 'posts/show', alert: 'Error'}   
    	  format.js
      end
    end
  end

  def destroy
  	@review = Review.find(params[:id])
  	@review.destroy
  	redirect_to posts_path
  end



  def load_post
  	@post= Post.find(params[:post_id])
  end

  private

  def set_review
      @review = Review.find(params[:id])
  end


  def review_params
  	params.require(:review).permit(:comment, :post_id, :user_id)
  end

end
