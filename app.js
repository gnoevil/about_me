'use strict';

var score = 0;
var msg = "Please use yes and y or no and n for answering the questions. ";
var username = prompt('What is your name?');
console.log('Hello ' + username + '!');

var scoreStatus = function() {
  console.log('Your current score ' + parseInt(score) + '/7');
}

function valYorN(q) {
  if (q === null) {
    alert('I see you havn\'t entered a valid answer, I am going to substract a point from your score.' );
    score -= 1;
    scoreStatus();
  } else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
    console.log(q);
    score += 1;
    scoreStatus();
  } else if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y') {
    console.log(q);
    score += 1;
    scoreStatus(); 
  } else {
    console.log(msg);
  }

  var q1 = prompt('Are you a wizard?');
  valYorN(q1);

  var q2 = prompt('Are you a witch?');
  valYorN(q2);

  var q3 = prompt('Do you want to be a wizard or a witch?');
  valYorN(q3);

  var q4 = prompt('Is it silly I am asking you these questions?');
  valYorN(q4);

  var q5 = prompt('Is this crazy?');
  valYorN(q5);

  var q6content = ('Let\'s guess a random number')
  var q6 = prompt(q6content);
  var guess = 0;
  var randomNum = Math.floor(Math.random() * 10);
  if (q6 !== randomNum && guess < 4) {
    guess += 1;
    console.log("Sorry, please try again.");
    prompt(q6content);
  }else if(q6 === randomNum) {
    console.log("You guessed the number correctly, it was: " + randomNum);
    score += 1;
    scoreStatus();
  } else {
    scoreStatus();
  }

  //Peer coding
