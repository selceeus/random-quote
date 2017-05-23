// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Build a list of quotes
var quotes = [
	{quote: "", source: "", citation: "", year: ""},
	{quote: "", source: "", citation: "", year: ""},
	{quote: "", source: "", citation: "", year: ""},
	{quote: "", source: "", citation: "", year: ""},
];

//Generate random number
function getRandomNumber() {

};

//Generate random quotes
function getRandomQuote(quotes) {
	console.log(quotes);

};

//Print random quote to page
function printQuote(getRandomQuote) {
	var quoteString = '<p class="quote">' +  + '</p> <p class="source">' +  + '<span class="citation">' +  + '</span> <span class="year">' +  + '</span> </p>';
	return quoteString;
};

