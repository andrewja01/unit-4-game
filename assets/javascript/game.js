$(document).ready(function() {
  //variables holding scores
  var wins = 0;
  var losses = 0;
  var randomNum = Math.floor(Math.random() * 102) + 19;
  var total = 0;

  crystals = [
    'assets/images/crystal1.png',
    'assets/images/crystal2.png',
    'assets/images/crystal3.png',
    'assets/images/crystal4.png'
  ];

  function gameOn() {
    $('.crystals').empty();

    randomNum = Math.floor(Math.random() * 102) + 19;

    $('#numLosses').text('Losses: ' + losses);
    $('#numWins').text('Wins: ' + wins);
    $('#totalScore').text('Your Total Score is: ' + total);
    $('#guess').text('Try to Match this Number: ' + randomNum);

    //for loop assigning random number to each crystal on click
    for (var i = 0; i < 4; i++) {
      var userNum = Math.floor(Math.random() * 12) + 1;
      console.log(userNum);
      var image = $('<img>');
      image.addClass('crystalIcon');
      image.attr('data-crystalnumber', userNum);
      image.attr('src', crystals[i]);

      $('.crystals').append(image);
    }
  }

  gameOn();

  $(document).on('click', '.crystalIcon', function() {
    var numbersInDeck = parseInt($(this).attr('data-crystalnumber'));
    total += numbersInDeck;

    //set up conditional
    if (total > randomNum) {
      console.log('You Lost');
      losses++;
      $('#numLosses').text('Losses: ' + losses);
      total = 0;
      gameOn();
    } else if (total === randomNum) {
      console.log('You Win');
      wins++;
      $('#numWins').text('Wins: ' + wins);
      total = 0;
      gameOn();
    }
    $('#numLosses').text('Losses: ' + losses);
    $('#numWins').text('Wins: ' + wins);
    $('#totalScore').text('Your Total Score is: ' + total);
  });

  // gameOn();
});
