require_relative '../test_helper'

class UpcTest < ActiveSupport::TestCase
  test 'calculates_check_digit' do
    example_upc = '84277610830'
    assert_equal 2, Upc.new(example_upc).check_digit
  end
end
