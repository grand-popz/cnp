document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");
  dropdown.addEventListener("mouseenter", function () {
    dropdown.querySelector(".dropdown-menu").style.display = "block";
  });
  dropdown.addEventListener("mouseleave", function () {
    dropdown.querySelector(".dropdown-menu").style.display = "none";
  });
});
