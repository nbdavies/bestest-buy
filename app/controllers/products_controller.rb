class ProductsController < ApplicationController
  def index
    @products = BestBuyApiSearch.new(params[:search_term]).results
    render json: @products
  end
  
  def show
    # Request a product's info from the Best Buy API
    # Render it in a page
  end
end
