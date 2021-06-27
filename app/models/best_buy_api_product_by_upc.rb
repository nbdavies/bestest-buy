require 'uri'
require 'net/http'

class BestBuyApiProductByUpc
  attr_reader :upc

  def initialize(upc)
    @upc = upc
  end
  
  def result
    return {} unless upc.present?
    return {} unless response.is_a?(Net::HTTPOK)

    JSON.parse(response.body)['products'].first
  end
  
  def response
    @response ||= Net::HTTP.get_response(full_url)
  end
  
  def full_url
    URI("https://api.bestbuy.com/v1/products(upc=#{upc.to_s})?format=json&show=name,upc,image,longDescription,salePrice&apiKey=#{api_key}")
  end
  
  def api_key
    Rails.application.credentials.best_buy[:api_key]
  end
end
