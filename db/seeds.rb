# cat: name (string), age (integer), color (string), disposition (string), sex (string), image (string)
# has_one: human

# human (user): name (string), username (string), password digest (string), location (string),
# has_many: cats

puts "Deleting old data..."
Cat.destroy_all
User.destroy_all
puts "Complete"

puts "Creating cats..."
beastie = Cat.create(name: "Beastie", age: 4, color: "black", sex: "female", disposition: "fierce")
tiger = Cat.create(name: "Tiger", age: 14, color: "tabby", sex: "male", disposition: "cuddly")
puts "Complete"

puts "Creating humans..."
leah = User.create(name: "Leah Cardoz", username: "lcardoz", password: "password", location: "Bushwick")
martin = User.create(name: "Martin Souza", username: "souzam", password: "password", location: "East Village")
kayla = User.create(name: "Kayla Hunnewell", username: "kayla_h", password: "password", location: "Los Angeles")
puts "Complete"

puts "Seeding complete"