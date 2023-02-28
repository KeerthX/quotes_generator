quotes=[
    "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. ",
    "Everything is theoretically impossible until it is done. ",
    "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    "If we knew what it was we were doing, it would not be called research, would it?"
]

quoteby = [
    "– Carl Sagan",
    "– Robert A. Heinlein",
    " – Isaac Asimov",
    " – Albert Einstein"
]

function getQuote() {
    var randomNumber = Math.floor(Math.random()* quotes.length) 
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber]
    document.getElementById('newQuotebySection').innerHTML = quoteby[randomNumber]
}