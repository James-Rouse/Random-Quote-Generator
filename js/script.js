/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array containing anime quotes and associated metadata.
***/
let quotes = [  
  {
    "quote": "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
    "source": "Roy Mustang",
    "citation": "Fullmetal Alchemist: Brotherhood",
    "year": 2009,
    "genre": "Anime"
  },
  {
    "quote": "I’ll leave tomorrow’s problems to tomorrow’s me.",
    "source": "Saitama",
    "citation": "One Punch Man",
    "year": 2015,
    "genre": "Anime"
  },
  {
    "quote": "Being lonely is more painful then getting hurt.",
    "source": "Monkey D. Luffy",
    "citation": "One Piece",
    "year": 1999,
    "genre": "Anime"
  },
  {
    "quote": "A dropout will beat a genius through hard work.",
    "source": "Rock Lee",
    "citation": "Naruto",
    "year": 2002,
    "genre": "Anime"
  },
  {
    "quote": "Reject common sense to make the impossible possible.",
    "source": "Simon",
    "citation": "Gurren Lagann",
    "year": 2007,
    "genre": "Anime"
  },
  {
    "quote": "A place where someone still thinks about you is a place you can call home.",
    "source": "Jiraiya",
    "citation": "Naruto",
    "year": 2002,
    "genre": "Anime"
  },
  {
    "quote": "People, who can’t throw something important away, can never hope to change anything.",
    "source": "Armin Arlert",
    "citation": "Attack on Titan",
    "year": 2013,
    "genre": "Anime"
  },
  {
    "quote": "Don't believe in yourself. Believe in me! Believe in the Kamina who believes in you!",
    "source": "Kamina",
    "citation": "Gurren Lagann",
    "year": 2007,
    "genre": "Anime"
  },
]


/***
 * Returns a random quote from the quotes array.
***/
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * 7)
  return quotes[randomNumber]
}


/***
 * Injects random quotes from getRandomQuote into the HTML.
***/
function printQuote(){
  let randomQuote = getRandomQuote()
  let htmlString = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`

  if (getRandomQuote.citation = true) {
    htmlString = htmlString.concat(`<span class="citation"> ${randomQuote.citation} </span>`)
  }

  if (getRandomQuote.year = true) {
    htmlString = htmlString.concat(`<span class="year"> ${randomQuote.year} </span>`)
  }
  
  htmlString = htmlString.concat(`<span class="year"> ${randomQuote.genre} </span>`)

  htmlString = htmlString.concat(`</p>`)

  document.getElementById('quote-box').innerHTML = htmlString
}


/***
 * Changes the background to a random color when refreshed or when the button is clicked.
 * Code from Grepper via search of "How to change to random background in Javascript".
***/
function random(number){
  return Math.floor(Math.random()*number)
}

function randomColor(){
return 'rgb('+random(255)+','+random(255)+','+random(255)+')'
}

function setRandomColor(){
  let clr_val=randomColor()
  document.body.style.backgroundColor=clr_val
}

document.getElementById('load-quote').addEventListener("click",setRandomColor)


/***
 * Auto-refreshes the page after 10 seconds.
 * Code from Grepper via search of "Javascript setinterval" and "Javascript refresh page".
***/
setInterval(function(){ 
	window.location.reload()
}, 10000)

printQuote()
setRandomColor()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false)