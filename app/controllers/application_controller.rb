class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :name << :last_name << :username
    devise_parameter_sanitizer.for(:account_update) << :name << :last_name << :username
  end
end
