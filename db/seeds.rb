puts "🗑 Deleting old data..."
Cat.destroy_all
User.destroy_all
puts "🗑 Complete ✅"

puts "🧬 Creating humans..."
leah = User.create(name: "Leah Cardoz", username: "lcardoz", password: "password", location: "Bushwick")
martin = User.create(name: "Martin Souza", username: "souzam", password: "password", location: "East Village")
kayla = User.create(name: "Kayla Hunnewell", username: "kayla_h", password: "password", location: "Los Angeles")
puts "🧬 Complete ✅"

puts "🐈 Creating cats..."
beastie = Cat.create(name: "Beastie", age: 4, color: "black", sex: "female", disposition: "fierce", user_id: martin.id)
tiger = Cat.create(name: "Tiger", age: 15, color: "tabby", sex: "male", disposition: "cuddly", user_id: kayla.id)
zimmy = Cat.create(name: "Zimmy", age: 3, color: "tabby", sex: "male", disposition: "handsome", user_id: kayla.id)
ru = Cat.create(name: "Ru", age: 3, color: "tabby", sex: "female", disposition: "suspicious", user_id: kayla.id)
stinkbot = Cat.create(name: "Stinkbot", age: 2, color: "tabby", sex: "female", disposition: "genius", user_id: kayla.id)
omelette = Cat.create(name: "Omelette", age: 1, color: "tabby", sex: "female", disposition: "round", user_id: kayla.id)
puts "🐈 Complete ✅"

puts "🌱 Seeding Complete ✅"