let quoteArray = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth",
    "Be the change that you wish to see in the world.", "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel"
]
let btn = document.querySelector("button");
let quote = document.querySelector(".quote");




btn.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 5)
    quote.innerHTML = `" ${quoteArray[randomNum]} "`
    console.log("heyyy")
})