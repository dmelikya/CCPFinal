const button = document.querySelector("button");
const elem = document.getElementById("animate");
let pos = 0;
let id = null;
let direction = 1;

function resetAnimation() {
  clearInterval(id);
  pos = 0;
  direction = 1;
  elem.style.top = pos + "px";
  elem.style.left = pos + "px";
}

button.addEventListener("click", function() {
  resetAnimation();

  id = setInterval(frame, 5);

  function frame() {
    if (pos >= 280 && direction === 1) {
      direction = -1;
    } else if (pos <= 0 && direction === -1) {
      direction = 1;
      clearInterval(id);
    }

    pos += direction;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";
  }
});