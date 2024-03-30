document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".case__list__btn");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var text = this.previousElementSibling;
      text.style.overflow = "visible";
      this.style.display = "none";
      text.style.display = "block";
      text.style.webkitBoxOrient = "horizontal";
    });
  });
});