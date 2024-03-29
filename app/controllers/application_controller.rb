class ApplicationController < ActionController::Base
  before_filter :configure_permitted_parameters, if: :devise_controller?
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def ensure_logged_in
    unless current_user
      flash[:alert] = "Please log in"
      redirect_to new_session_path
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :first_name << :last_name << :username
    devise_parameter_sanitizer.for(:account_update)  << :first_name << :last_name << :username
  end

end
