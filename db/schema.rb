# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 0) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", primary_key: "item_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "item_name", limit: 40, null: false
    t.text "item_description", null: false
    t.decimal "item_price", precision: 10, scale: 2, null: false
  end

  create_table "orders", primary_key: "order_id", id: :integer, default: nil, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "order_amount", limit: 2, null: false
  end

  create_table "orders_description", primary_key: "order_description_id", id: :integer, default: nil, force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "item_id", null: false
    t.integer "order_description_quantity", limit: 2, null: false
  end

  create_table "users", primary_key: "user_id", id: :integer, default: nil, force: :cascade do |t|
    t.string "first_name", limit: 40, null: false
    t.string "last_name", limit: 40, null: false
    t.string "user_email", limit: 30, null: false
    t.string "user_password", limit: 25, null: false
    t.string "user_role", limit: 5, null: false
  end

end
