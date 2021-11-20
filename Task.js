function leftColumn() {
  document.getElementById("left").classList.add("column");
  document.getElementById("right").classList.add("hide");
  document.getElementById("left").classList.remove("hide");
  document.getElementById("right").classList.remove("column");
}

function centerColumn() {
  document.getElementById("left").classList.remove("column");
  document.getElementById("right").classList.remove("column");
  document.getElementById("left").classList.remove("hide");
  document.getElementById("right").classList.remove("hide");
}

function rightColumn() {
  document.getElementById("left").classList.add("hide");
  document.getElementById("right").classList.add("column");
  document.getElementById("left").classList.remove("column");
  document.getElementById("right").classList.remove("hide");
}
