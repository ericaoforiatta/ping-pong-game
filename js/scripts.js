$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var oddnumberInput = $("input#oddnumber").val(ping);
    var evennumberInput = $("input#evennumber").val(pong);


    $(".oddnumber").text(person1Input);
    $(".evennumber").text(person2Input);


    $("#story").show();

    event.preventDefault();
  });
});
