const button = document.getElementById("event-button");
const message = document.getElementById("message");

button.addEventListener("mouseover", function() {
    message.textContent = "You are hovering over the button!";
});

button.addEventListener("mouseout", function() {
    message.textContent = "Hover over the button to see a message change!";
});

const keyInput = document.getElementById("key-input");
const keyPressedDisplay = document.getElementById("key-pressed");

keyInput.addEventListener("keydown", function(event) {
    keyPressedDisplay.textContent = event.key;
});

const form = document.getElementById("simple-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    formMessage.style.display = "block";
});