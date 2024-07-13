const quotes = [
"Dream big, work hard.",
"Embrace the journey.",
"Create your own sunshine.",
"Stay curious, stay hungry.",
"Keep moving forward.",
"Change the world with code.",
"Believe in yourself.",
"Strive for progress, not perfection.",
"Every day is a new opportunity.",
"Live life, code well.",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    
    while(true){
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if(usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML= quote
    usedIndexes.add(randomIdx)
    break
    }
}

