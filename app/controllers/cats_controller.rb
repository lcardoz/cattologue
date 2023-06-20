class CatsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,
    with: :unprocessable_entity_response

    def index
        render json: Cat.all, status: :ok
    end

    def create
        render json: Cat.create!(cat_params), status: :created
    end

    private
    def cat_params
        params_permit(:name, :age, :sex, :color, :disposition, :image)
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.erros},
        status: unprocessable_entity
    end
end
