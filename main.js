// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// get all necessary element first
// make the heart filled , get the element heart
const alertHeartLiker = document.querySelectorAll('.like-glyph')

function serverCallback(e) {
  const heart = e.target
  mimicServerCall()
    .then(() => {
      if( heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else{
        heart.innerText = EMPTY_HEART;
        heart.className = ""
      }
    })
    .catch((err) => {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = err;
      setTimeout(() => modal.className = "hidden", 3000)
    });
  }

  for (const glyph of alertHeartLiker) {
    glyph.addEventListener("click", serverCallback)
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
