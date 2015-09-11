describe("findAndReplace", function() {

  it('finds a word in a string and returns a new word as a replacement', function() {
    expect(findAndReplace("hello world", "world", "universe")).to.equal("universe");
  });

});
