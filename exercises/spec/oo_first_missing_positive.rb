describe "Positive" do
    let(:app) { Positive.new([1,2,3,1]) }
    let(:invalid_app) { Positive.new }
  
    describe "attributes and method tests" do
      subject { app }
  
      it "raises ArgumentError when initialized without an array parameter" do
        expect { invalid_app }.to raise_error(ArgumentError)
      end
    end

    # describe "project euler solution" do
    #     it "returns the correct solution" do 
    #         expect(app.check_duplicate).to eq(true)
    #     end 
    # end

    describe "#separate" do 

        # it 'modifies the original array' do 

        # end 

        it 'returns a count of numbers less than 1' do 
            expect(Positive.new([-1,0,1,1,-2,-3]).separate).to eq(4)
        end 
    end 
end

# test('when firstMissingPositive is given Input: [1,2,0] it should return 3', () => {
#     expect(firstMissingPositive([1,2,0])).toBe(3);
# })

# test('when firstMissingPositive is given Input: [3,4,-1,1] it should return 2', () => {
#     expect(firstMissingPositive([3,4,-1,1])).toBe(2);
# })

# test('when firstMissingPositive is given [7,8,9,11,12] it should return 1', () => {
#     expect(firstMissingPositive([7,8,9,11,12])).toBe(1);
# })

# test('when firstMissingPositive is given [1,1,2,2,5] it should return 3', () => {
#     expect(firstMissingPositive([1,1,2,2,5])).toBe(3);
# })