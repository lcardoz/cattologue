class UsersController < ApplicationController
    
    # def index
    #     render json: User.all, status: :ok
    # end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = User.find(session[:user_id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private
    
    def user_params
        params.permit(:username, :password, :name, :location, :id)
    end

end
