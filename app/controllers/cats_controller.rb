class CatsController < ApplicationController
    def index
        render json: Cat.all, status: :ok
    end

    def create
        new_cat = Cat.create!(
            user_id: session[:user_id],
            name: params[:name],
            age: params[:age],
            sex: params[:sex],
            color: params[:color],
            disposition: params[:disposition],
            image: params[:image]
        )
        render json: new_cat, status: :created
    end

    # private
    # def cat_params
    #     params.permit(:name, :age, :sex, :color, :disposition, :image)
    # end
end
