// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// error div at top of document
const ERROR_MODAL = document.getElementById("modal")


function makeFull(target){
  target.innerText = FULL_HEART
  target.className = ('activated-heart')
}

function throwError(error){
    ERROR_MODAL.className = ('');
    ERROR_MODAL.innerText = error
    setTimeout(function() {
      ERROR_MODAL.className = ('hidden')
    }, 5000)
}

// setTimeout(throwError, 5000)

function makeFetch(event) {
  mimicServerCall()
  .then(function() {
    makeFull(event.target)})
  .catch(response => {
    console.log("ERROR ERROR")
    throwError(response)
  })
}

const heartClick = function(event) {
  if(event.target.innerText === EMPTY_HEART) {
    makeFetch(event);
  } else {
    event.target.innerText = EMPTY_HEART
    event.target.className = ('')
  }
}

const heartGlyphs = document.querySelectorAll(".like-glyph")
const allHearts = Array.from(heartGlyphs)

allHearts.forEach(function (heart) {
  heart.addEventListener("click", heartClick)
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
