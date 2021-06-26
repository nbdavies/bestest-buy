require 'uri'
require 'net/http'

class BestBuyApiSearch
  attr_reader :search_term

  def initialize(search_term)
    @search_term = search_term
  end
  
  def results
    return [] unless search_term.present?
    return [] unless response.is_a?(Net::HTTPOK)

    JSON.parse(response.body)['products']
  end
  
  def response
    @response ||= Net::HTTP.get_response(full_url)
  end
  
  def full_url
    URI("https://api.bestbuy.com/v1/products(#{search_params})?format=json&show=name,upc,image&apiKey=#{api_key}")
  end
  
  def search_params
    terms = search_term.split(' ')
    terms.map do |term|
      "search=#{term}"
    end.join('&')
  end
  
  def api_key
    Rails.application.credentials.best_buy[:api_key]
  end
end
