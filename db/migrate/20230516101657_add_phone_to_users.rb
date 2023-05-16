class AddPhoneToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :Phone, :string
  end
end
