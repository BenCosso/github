//Tracery generated text
var text = 
    {
  "origin": [
    "#action# #activity# #place#, or just click for another option"
  ],
  "action": [
    "Let's",
    "You should totally",
    "How about this:",
    "Here's a great piece of advice:"
  ],
  "activity": [
    "go snowboarding in",
    "travel to",
    "go for a beer in",
    "take a train to",
    "run to the airport and take the first flight to"
  ],
  "place": [
    "Colorado",
    "Paris",
    "downtown Brooklyn",
    "the desert",
    "the Grand Canyon",
    "the White House",
    "the Trump Tower"
  ]
};
//Tracery function
var grammar = tracery.createGrammar(text)

function generate(){
	var t = grammar.flatten("#origin#");
	$('.quote').text(t);
}
//Allow first text to appear when page loads
$(".quote").text(function(){
    generate();
})
//Allow new text to appear when button is clicked
$("#quoteButton").on("click", function(){
  generate();
});
//changes background image 
$(".quote:contains('Canyon')").addClass("grandcanyon");
$(".quote:contains('Brooklyn')").addClass("brooklyn");
$(".quote:contains('Colorado')").addClass("colorado");
$(".quote:contains('desert')").addClass("desert");
$(".quote:contains('Paris')").addClass("paris");
$(".quote:contains('Trump')").addClass("trumptower");
$(".quote:contains('White')").addClass("whitehouse");
// Code to change background image without reloading the page won't work, seems to be a Tracery related issue
       /* if ($(".quote:contains('Brooklyn')")) {
          $("body").addClass("brooklyn");
        } else if ($(".quote:contains('Colorado')")) {
          $("body").addClass("colorado");
        } else if ($(".quote:contains('Canyon')")) {
          $("body").addClass("grandcanyon");
        } else if ($(".quote:contains('desert')")){
          $("body").addClass("desert");
        } else if ($(".quote:contains('Paris')")){
          $("body").addClass("paris");
        } else if ($(".quote:contains('Trump')")){
          $("body").addClass("trumptower");
        } else {
          $("body").addClass("whitehouse");
        }*/