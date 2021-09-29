//letters
const letters='abcdefghijkmnopqrstuvwxyz';

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