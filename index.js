const shareButton = document.getElementById("share");

shareButton.addEventListener("click", function () {
  const tooltip = document.getElementById("tooltip");
  if (tooltip.style.visibility === "visible") {
    tooltip.style.visibility = "hidden";
  } else {
    tooltip.style.visibility = "visible";
  }
});
