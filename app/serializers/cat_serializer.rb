class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :color, :sex, :disposition, :image
  belongs_to :user
end
