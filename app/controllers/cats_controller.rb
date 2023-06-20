class CatsController < ApplicationController
    def index
        render json: Cat.all, status: :ok
    end

    def create
        render json: Cat.create!(cat_params), status: :created
    end

    private
    def cat_params
        params.permit(:name, :age, :sex, :color, :disposition, :image)
    end
end
