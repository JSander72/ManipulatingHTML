document.addEventListener("DOMContentLoaded", function () {
  // Make a button
  var button = document.createElement("button");
  button.textContent = "Click me!";


  document.body.appendChild(button);


  button.addEventListener("click", function () {

    alert("Nice!");
  });


  function showAlert() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();

    if (message) {
      alert(message);
    } else {
      alert("Please enter a message.");
    }
  }

  const showButton = document.getElementById("showButton");
  showButton.addEventListener("click", showAlert);

  const colorChangeDiv = document.getElementById("colorChangeDiv");
  const originalColorDiv = colorChangeDiv.style.backgroundColor;

  colorChangeDiv.addEventListener("mouseenter", () => {
    colorChangeDiv.style.backgroundColor = "lightcoral";
  });

  colorChangeDiv.addEventListener("mouseleave", () => {
    colorChangeDiv.style.backgroundColor = originalColorDiv;
  });

  const colorChangeParagraph = document.getElementById("colorChangeParagraph");
  const originalColorParagraph = colorChangeParagraph.style.backgroundColor;

  colorChangeParagraph.addEventListener("mouseenter", () => {
    colorChangeParagraph.style.backgroundColor = "blue";
  });

  colorChangeParagraph.addEventListener("mouseleave", () => {
    colorChangeParagraph.style.backgroundColor = originalColorParagraph;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const addSpanButton = document.getElementById("addSpanButton");
  const emptyDiv = document.getElementById("emptyDiv");

  addSpanButton.addEventListener("click", function () {

    const span = document.createElement("span");
    span.textContent = "James Sanders";


    emptyDiv.appendChild(span);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addFriendsButton = document.getElementById("addFriendsButton");
  const friendsList = document.getElementById("friendsList");

  addFriendsButton.addEventListener("click", function () {
    const friendNames = [
      "De'Meco",
      "Jackie",
      "DeAmber",
      "Jasmine",
      "Mike",
      "Tanisha",
      "Doris",
      "Ken",
      "Kem",
      "Larry"
    ];

    
    friendNames.forEach(function (friendName) {
      const li = document.createElement("li");
      li.textContent = friendName;
      friendsList.appendChild(li);
    });
  });
});
