class ItemsController < ApplicationController
    def getItems
        @items = Item.all

        if !@items 
            render json: {
                code: 500, 
                status: 'failure'
            }
        else
            render json: {
                code: 200,
                status: 'success',
                payload: @items
            }
        end
    end
end
