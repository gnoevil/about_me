'use strict'
var questions = [
  'Have you watched any Harry Potter or read the books?',
  'Let\'s say you did. Tell me your favorite character?',
  'Which house would you belong too?',
  'Is it silly I am asking you these questions?',
  'How about Marvel then?']  // Array of questions
var questionArrLength = questions.length
var questionNumber = 0
var question = ''
var answerForm = '<input type="text" id="answer" value=""></input>'
var i
// Loop through questions
for (i = 0; i < questionArrLength; i++) {
  questionNumber = (i + 1)
  question += '<li>' + 'Question ' + questionNumber + ': ' + questions[i] + '</li>' + '<br/>' + answerForm
}
document.getElementById('questions').innerHTML = question

var answer = answer.toLowerCase
if (answer = 'y' || 'yes') {
  console.log('Your answer: Yes')
} else if (answer.toLowerCase = 'n' || 'no') {
  console.log('Your answer: No')
} else {
  console.log('Your answer should be a "y" or "yes", it can also be "n" or "no". Please try again')
}
document.getElementById('answer').innerHTML = answer
