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
            expect(Duplicate.new([1,1,1,3,3,4,3,2,4,2]).check_duplicate).to eq(true)
        end 

        it 'returns false if there is not a duplicate element in the argument' do 
            expect(Duplicate.new([1,2,3,4]).check_duplicate).to eq(false)
        end 
    end 

    describe "project euler solution" do
        it "returns the correct solution" do 
            expect(app.check_duplicate).to eq(true)
        end 
    end
end