const shareButton = document.getElementById("share");

shareButton.addEventListener("click", function () {
  var expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute('aria-expanded', !expanded);
  if (expanded) {
    tooltip.style.visibility = "hidden";
  } else {
    tooltip.style.visibility = "visible";
  }
});
