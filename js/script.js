//Array of quotes

var quotes = [
	{quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", source: "Lao Tzu", citation: "Brainy Quotes", year: ""},
	{quote: "Strength and growth come only through continuous effort and struggle.", source: "Napoleon Hill", citation: "Brainy Quotes", year: ""},
	{quote: "The world breaks everyone, and afterward, some are strong at the broken places.", source: "Ernest Hemingway", citation: "", year: "1925"},
	{quote: "There are two ways of exerting one’s strength: one is pushing down, the other is pulling up.", source: "Booker T. Washington", citation: "Success.com", year: "1905"},
];

//Generate random number from the keys in array. Set an argument for the amount of quotes
function getRandomNumber( quoteArray ) {
	let randNum = Math.floor ( Math.random() * quotes.length );
	return randNum;
}

//Creat random quote from quote array and random number
function getRandomQuote( quoteArray , passint ) {
	var singelQuote = quoteArray[passint];
	return singelQuote;
}

//Assemble the quote content
function printQuote( stringRandomQuote ) {
	let quoteObject = stringRandomQuote;
	let newYear = (quoteObject.year !== '') ? '<span class="year">' +  quoteObject.year + '</span>' : "";
	let newCitation = (quoteObject.citation !== '') ? '<span class="citation">' +  quoteObject.citation  + '</span>' : "";
	let quoteString = '<p class="quote">' +  quoteObject.quote + '</p> <p class="source">' + quoteObject.source + '' +  newCitation  + '' +  newYear + '</p>';
	return quoteString;
}

//Generate the random quote, placed in separate funtion to use for other events
function doAll() {
	//rand background color
	let randColor = Math.floor(Math.random()*16777215).toString(16);
	let randomInt = getRandomNumber(quotes);
	let randomQuote = getRandomQuote(quotes, randomInt);
	let quoteOutput = printQuote(randomQuote);

	//change the background color
	document.body.style.backgroundColor = "#" + randColor;

	//select element and output the quote content
  	document.getElementById('quote-box').innerHTML = quoteOutput;
}

//Populate the html on load
doAll();

//Change quote after 30 sec
setInterval(function(){ 
	doAll();
}, 30000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

const buttonClick = document.getElementById('loadQuote');

buttonClick.addEventListener("click", function() {
	doAll();
});
