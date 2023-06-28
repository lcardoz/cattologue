class UserCatSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :sex, :color, :disposition
end
