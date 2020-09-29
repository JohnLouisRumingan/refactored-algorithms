
# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears at least twice in the array, 
# and it should return false if every element is distinct.

# Example 1:

# Input: [1,2,3,1]
# Output: true

# Example 2:

# Input: [1,2,3,4]
# Output: false

# Example 3:

# Input: [1,1,1,3,3,4,3,2,4,2]
# Output: true


class Duplicate

    attr_reader :check_duplicate, :array

    def initialize(array)
        @array = array
        @check_duplicate = check_duplicate
    end 

    def check_duplicate

        dup_hash = {}

        @array.each do |num|
            if(dup_hash[num]) 
                return true 
            else 
                dup_hash[num] = 1
            end 
        end 

        return false
    end 
end 