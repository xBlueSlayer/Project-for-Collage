// script.js
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const popupClose = document.getElementById("popup-close");
const popupTriggers = document.querySelectorAll(".popup-trigger");

popupTriggers.forEach(trigger => {
  trigger.addEventListener("click", function() {
    const imageUrl = this.getAttribute("src");
    popupContent.setAttribute("src", imageUrl);
    overlay.style.display = "block";
  });
});

popupClose.addEventListener("click", function() {
  closePopup();
});

overlay.addEventListener("click", function(event) {
  if (event.target === overlay) {
    closePopup();
  }
});

function closePopup() {
  overlay.style.display = "none";
  popupContent.removeAttribute("src");
}
