class Cat < ApplicationRecord
    validates_presence_of :name, :age, :sex, :color, :disposition
    belongs_to :user
end
