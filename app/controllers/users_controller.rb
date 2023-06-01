class UsersController < ApplicationController
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
end
