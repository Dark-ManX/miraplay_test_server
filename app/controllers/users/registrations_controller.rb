# frozen_string_literal: true
require 'bcrypt'
context_id = 165
IdGenerator.configuration.context_id = context_id


class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_params, only: [:create]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    @user = User.new(
      # id: IdGenerator.generate,
      email: params[:user][:email],
      encrypted_password: params[:user][:password],
      first_name: params[:user][:firstName],
      last_name: params[:user][:lastName],
      user_role: params[:user][:role]
    )
    puts @user
    @user.save

    if !@user
      render json: {
        code: 400,
        status: 'failure'
      }
    else 
      respond_with @user
      # render json: {
      #   code: 201,
      #   status: 'success',
      #   payload: @user
      # }
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_permitted_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :user_role])
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :user_role])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end  

end
