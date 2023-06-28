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

    def update
        cat = cat.find(params[:id])
        cat.update!(cat_params)
        render json: cat, status: :accepted
    end

    def destroy
        Cat.find(params[:id]).destroy
        head :no_content
    end

    private
    def cat_params
        params.permit(:name, :age, :sex, :color, :disposition, :image)
    end
end
