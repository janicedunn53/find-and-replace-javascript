describe("findAndReplace", function() {

  it('replaces a word in a string and returns the new string', function() {
    expect(findAndReplace("hello world", "world", "universe")).to.equal("hello universe");
  });

});
