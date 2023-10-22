class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.text :item_name
      t.text :item_description
      t.float :item_price

      t.timestamps
    end
  end
end
