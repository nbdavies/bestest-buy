class Upc
  attr_reader :raw_upc

  def initialize(raw_upc)
    @raw_upc = raw_upc
  end
  
  def check_digit
    even_digits = []
    odd_digits = []
    raw_upc.reverse.each_char.with_index do |digit, index|
      if index % 2 # indices 0,2,4
        odd_digits << digit.to_i
      else
        even_digits << digit.to_i
      end
    end
    sum = (odd_digits.sum * 3) + even_digits.sum
    remainder = sum % 10
    remainder.zero? ? 0 : (10 - remainder)
  end
  
  def valid?
    check_digit.present?
  end
  
  def to_s
    raw_upc
  end
end
