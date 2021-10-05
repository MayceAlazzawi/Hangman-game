//letters
const letters='abcdefghijkmnopqrstulvwxyz';

//Get Array From Letters
let lettersArray = Array.from(letters);

//select letters container 
let lettersContainer = document.querySelector('.letters');

// Generate Letters 
lettersArray.forEach(letter => {

  //create span
  let span = document.createElement('span');

  // create letter text node 
  let theLetter = document.createTextNode(letter);

  //apend the letter to span
  span.appendChild(theLetter)

  //add class on span
  span.className ='letters-box';

  //appened span to the letters container
  lettersContainer.appendChild(span);
})

// object of words + categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);

// get a ranDom number
const randomProbNum = Math.floor(Math.random() * allKeys.length);

// get a random prop name
const randomPropName = allKeys[randomProbNum];


// get a random prop value
const randomPropValue = words[randomPropName] ;


// get a random value number
const randomValueNum = Math.floor(Math.random() * randomPropValue.length);

// get a random value from the randomvalue
const randomValueValue = randomPropValue[randomValueNum];

console.log(randomValueValue )

document.querySelector(".game-info .category span").innerHTML = randomPropName;


// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter === ' ') {

    // Add Class To The Span
    emptySpan.className = 'with-space';

  }

  // Append Span To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);

});


// Select guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");
let theDraw = document.querySelector('.hangman-draw');
let wrongAttempts = 0;

// Handiling clicking on letter
document.addEventListener("click", (e) => {




  // Set the chose status
let theStatus = false;

  if (e.target.className === 'letters-box') {

    e.target.classList.add("clicked");

    // Get clicked letters 
    let theClickedLetter = e.target.innerHTML.toLowerCase();
  
    // The chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    
    theChosenWord.forEach((wordLetter, wordIndex) => {

    //if the clicked letter equals one of the chosen word's letters
    if (theClickedLetter == wordLetter) {
    
     // Loop On All Guess Spa
     
     //set status to correct
     theStatus= true;
     
     // Loop on all guess spans
     guessSpans.forEach((span, spanIndex) => {

      if (wordIndex === spanIndex) {

        span.innerHTML = theClickedLetter;

      }
    });
   
    }
    })
    if (theStatus !== true) {

      //increase the write attempts
      wrongAttempts++;
      
      //add class wrong on the draw element
      theDraw.classList.add(`wrong-${wrongAttempts}`)

      //Play fail sound 
      document.getElementById('fail').play();

      if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add('finished');

      }

    } else {
       //Play success sound 
       document.getElementById('success').play();
       
    }
  }
})

// End Game Function
function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);

}
