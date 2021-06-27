class ProductsController < ApplicationController
  def index
    @products = BestBuyApiSearch.new(params[:search_term]).results
    render json: @products
  end
  
  def show
    @upc = Upc.new(params[:id])
    raise 'Invalid UPC' unless @upc.valid?
    @product = BestBuyApiProductByUpc.new(@upc).result
  rescue => e
    redirect_back(fallback_location: :root)
  end
end
