var findAndReplace = function(sentence, oldWord, newWord) {
  var re = new RegExp(oldWord, "gi");
  var newSentence = sentence.replace(re, newWord);
  return newSentence;
};

$(document).ready(function() {
  $("form#user-inputs").submit(function(event) {
    var sentence = $("input#sentence").val();
    var oldWord = $("input#oldWord").val();
    var newWord = $("input#newWord").val();
    var newSentence = findAndReplace(sentence, oldWord, newWord);

    $(".newSentence").text(newSentence);

    $("#result").show();
    event.preventDefault();
  });
});
