Rails.application.routes.draw do
  resources :reviews

  devise_for :users
  root to: 'posts#index'

  resources :posts
  resources :users

end
