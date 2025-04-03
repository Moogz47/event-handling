const button = document.getElementById("event-button");
const message = document.getElementById("message");

button.addEventListener("mouseover", function() {
    message.textContent = "You are hovering over the button!";
});

button.addEventListener("mouseout", function() {
    message.textContent = "Hover over the button to see a message change!";
});