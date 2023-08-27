$(document).ready(function () {

  var button = $('<button>Click me!</button>');


  $('body').append(button);


  button.click(function () {

      alert("Nice!");
  });
});
$(document).ready(function () {

  var messageInput = $('#messageInput');
  var showAlertButton = $('#showAlertButton');


  showAlertButton.click(function () {
      var message = messageInput.val().trim();

      if (message) {

          alert(message);
      } else {
          alert("Please enter a message.");
      }
  });
});
$(document).ready(function () {
  var colorChangeDiv = $('#colorChangeDiv');
  var originalColorDiv = colorChangeDiv.css('background-color');

  colorChangeDiv.on('mouseenter', function () {

      colorChangeDiv.css('background-color', 'lightcoral');
  });

  colorChangeDiv.on('mouseleave', function () {

      colorChangeDiv.css('background-color', originalColorDiv);
  });
});
$(document).ready(function () {
  var colorChangeParagraph = $('#colorChangeParagraph');

  colorChangeParagraph.click(function () {

      var randomColor = getRandomColor();


      colorChangeParagraph.css('color', randomColor);
  });


  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
});
$(document).ready(function () {

  var addNameButton = $('#addNameButton');
  var nameContainer = $('#nameContainer');


  addNameButton.click(function () {

    var span = $('<span>James Sanders</span>');


    nameContainer.append(span);
  });
});
$(document).ready(function () {
  
  var addFriendsButton = $('#addFriendsButton');
  var friendsList = $('#friendsList');


  addFriendsButton.click(function () {
    var friendNames = [
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


    $.each(friendNames, function (index, friendName) {

      var li = $('<li>' + friendName + '</li>');


      friendsList.append(li);
    });
  });
});
