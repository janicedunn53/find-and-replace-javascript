var findAndReplace = function(sentence, oldWord, newWord) {
  var re = new RegExp(oldWord, "g");
  var newSentence = sentence.replace(re, newWord);
  return newSentence;
};
