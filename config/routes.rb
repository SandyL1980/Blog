Rails.application.routes.draw do
  root to: 'posts#index'

  devise_for :users
  resources :users
  
  resources :posts do
  	resources :reviews
  end
 
end
