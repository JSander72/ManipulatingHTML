$(document). ready(function(){
  $('#DynamicDiv'). append('<input type="button" id="dynamic" value="Dynamic Button" />');
  $('#clickMe'). click(function () {
  alert("Hey I am Static Control");
  });
});
