document.addEventListener("DOMContentLoaded", function () {
  // Make a button
  var button = document.createElement("button");
  button.textContent = "Click me!";

  // Append the button to body
  document.body.appendChild(button);

  // Add an event listener
  button.addEventListener("click", function () {
      // Display an alert when the button is clicked
      alert("Nice!");
      // Function to display the alert message
      function showAlert() {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value.trim(); // Get the value and trim whitespace

        if (message) {
            alert(message);
        } else {
            alert("Please enter a message.");
        }
      }

      // Add a click event listener to the button
      const showButton = document.getElementById("showButton");
      showButton.addEventListener("click", showAlert);
  });
});
