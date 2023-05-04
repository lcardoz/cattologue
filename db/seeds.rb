# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# cat: name (string), age (integer), color (string), disposition (string), sex (string), image (string)
# has_one: human

# human (user): name (string), username (string), password digest (string), location (string),
# has_many: cats

beastie = Cat.create(name: "Beastie", age: 4, color: "black", sex: "female", disposition: "fierce")
tiger = Cat.create(name: "Tiger", age: 14, color: "tabby", sex: "male", disposition: "cuddly")