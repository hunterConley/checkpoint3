'use strict';
$(document).ready(function() {

  //Hide game over image
  $("#harambe2").hide();

  //Declare the variables for the program
  var data = {
  totalClicks: 0,
  accumulatedTotal: 0,
  actualTotal: 0
};

  //Function to set the interval
  setInterval(clickTotal, 1000);

  //Function to count clicks on the Image
  function clickTotal() {
    data.totalClicks += data.actualTotal;
    data.accumulatedTotal += data.actualTotal;
    document.title = ('Clicks - ' + data.accumulatedTotal);
    updateReport();
  };

  //Function to accumulate all Clicks
  function updateReport() {
    $("#clicks").text(data.actualTotal);
    $("#accumulatedTotal").text(Math.floor(data.accumulatedTotal));
  };

  //Add an click event for the user to gain clicks by clicking the image
  $("#harambe").click(function() {
    data.totalClicks ++;
    data.accumulatedTotal ++;
    updateReport();
  });

  //Event handlers to provide css styling to the image
 $("#harambe").mouseenter(function() {
   $(this).css('transform','scale('+ 1.1 +')');
 });
 $("#harambe").mouseleave(function() {
   $(this).css('transform','scale('+ 1 +')');
 });

  //Add an event handler for the Buttons
  $('.btn').click(function() {
    //if statement to make sure the user has enough clicks to purchase add-ons
    if ($(this).data("cost") < data.accumulatedTotal) {
      data.accumulatedTotal -=  parseFloat($(this).data("cost").toPrecision(1));
      data.actualTotal += parseFloat($(this).data("val"));
      $(this).children("span").html( parseInt($(this).children("span").html()* 1.1));
      $(this).data("cost", parseInt($(this).data("cost") * 1.1));
    } else alert("You do not have enough clicks to purchase that yet!");
  });

  //Add an event handler for button 4 which ends the game.
  $('.button4').click(function() {
    $('.gameover').text('You killed Harambe!');
    $('.gameover').text('R.I.P. 1999-2016')
    $('.container').hide();
    $('#harambe2').show();
    $("footer").hide();
  });

});
