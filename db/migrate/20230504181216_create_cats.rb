class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.string :color
      t.string :disposition
      t.string :sex
      t.string :image

      t.timestamps
    end
  end
end
