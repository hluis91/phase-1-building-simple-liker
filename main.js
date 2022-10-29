// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likes = document.querySelectorAll('.like-glyph')

for (heart of likes) {
  heart.addEventListener('click', manageLike)
}

function manageLike(event) {
 const targetHeart = event.target;

  mimicServerCall()
    .then(function (response) {
      if(targetHeart.innerText === EMPTY_HEART) {
        targetHeart.classList.add('activated-heart')
        targetHeart.textContent = FULL_HEART;
      } else {
        targetHeart.classList.remove('activated-heart')
        targetHeart.textContent = EMPTY_HEART;
      }
    })
    .catch(function (error) {
      const modal = document.querySelector('#modal')
      console.log(modal)
      modal.classList.remove('hidden')
      modal.innerText = error
      setTimeout(function () {
        modal.classList.add('hidden')
      }, 3000)
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Action Plan:
  
// #. do 1a -1b in console  
 
// 1a. select any heart
// 1b. Get rid of the full heart by getting rid of .activated-heart

// /// once you do steps above ///

// 2b. create an if statement that checks to see if there is a full heart on the page
// and so do...

// Change the heart back to an EMPTY_HEART  
// Remove the .activated-heart class

// But if not do...

// Change the heart to a FULL_HEART  
// Add the .activated-heart class to make the heart appear red