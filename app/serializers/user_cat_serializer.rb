class UserCatSerializer < ActiveModel::Serializer
  attributes :name, :age, :sex, :color, :disposition
end
