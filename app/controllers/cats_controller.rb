class CatsController < ApplicationController
    def index
        render json: Cat.all, status: :ok
    end
end
