
document.getElementById("hover").addEventListener("mouseover", mouseOver);
document.getElementById("hover").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("hover").style.color = "red";
};

function mouseOut() {
    document.getElementById("hover").style.color = "black";
  };