const hover = document.getElementById("hover");

// This handler will be executed only once when the cursor
// moves over item
hover.addEventListener("mouseenter", (event) => {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over item
hover.addEventListener("mouseover", (event) => {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
}, false);
