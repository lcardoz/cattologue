class AddUserToCats < ActiveRecord::Migration[7.0]
  def change
    add_reference :cats, :user, foreign_key: true
  end
end
