quotes=[
    "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.– Carl Sagan ",
    "Everything is theoretically impossible until it is done. – Robert A. Heinlein",
    "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. – Isaac Asimov",
    "If we knew what it was we were doing, it would not be called research, would it? – Albert Einstein"
]

function getQuote() {
    var randomNumber = Math.floor(Math.random()* quotes.length) 
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber]
}