require_relative '../test_helper'

class BestBuyApiSearchTest < ActiveSupport::TestCase
  test 'returns_results' do
    results = BestBuyApiSearch.new('pixel pen').results

    assert results.count > 0
    result = results.first
    assert result['name'].present?
    assert result['upc'].present?
    assert result['image'].present?
  end
end
