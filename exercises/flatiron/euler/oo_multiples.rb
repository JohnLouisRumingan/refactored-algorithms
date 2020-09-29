# Problem: Multiples of 3 and 5
# If we list all of the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

class Multiples

    attr_reader :limit, :multiples
    attr_writer
    attr_accessor

    def initialize(limit)
        @limit = limit-1 # only utilize numbers below limit
        @multiples = collect_multiples
    end

    def collect_multiples
        (1..@limit).to_a.select{|num| num % 3 == 0 || num % 5 == 0}
    end 

    def sum_multiples 
        @multiples.reduce(:+)
    end
end 