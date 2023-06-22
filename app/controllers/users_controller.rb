class UsersController < ApplicationController
    wrap_parameters format: []
    
    # def index
    #     render json: User.all, status: :ok
    # end

    def show # Refactor for rescue block??
        user = User.find(session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        # rescue / rescue from instead?
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages},
            status: :unprocessable_entity
        end
    end

    private
    
    def user_params
        params.permit(:username, :password, :name, :location)
    end

end
