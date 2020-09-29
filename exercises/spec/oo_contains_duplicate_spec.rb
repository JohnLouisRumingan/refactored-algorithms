describe "Duplicate" do
    let(:app) { Duplicate.new([1,2,3,1]) }
    let(:invalid_app) { Duplicate.new }
  
    describe "attributes and method tests" do
      subject { app }
  
      it "raises ArgumentError when initialized without an array parameter" do
        expect { invalid_app }.to raise_error(ArgumentError)
      end
    end

    describe "#duplicates" do 
        it 'returns true if there is a duplicate element in the argument' do 
            expect(Duplicate.new([1,2,3,1]).check_duplicate).to eq(true)
        end 
    end 
  
#     describe "#collect_multiples" do
#       it 'returns the correct multiples of natural numbers below 10' do
#         expect(DUplicate.new(10).collect_multiples).to eq([3,5,6,9])
#       end
  
#     describe "project euler solution" do
#       it "returns the correct solution" do
#         expect(app.sum_multiples).to eq(233168)
#       end
#     end
#   end

end